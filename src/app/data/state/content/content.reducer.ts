import { act } from '@ngrx/effects';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Content } from '../../models/content';
import { FilterExpressionType, FilterType, FilterTypeMapping } from '../../models/filter';
import { SortByDataTypeMap, SortExpression, SortOrder, SortOrderMap } from '../../models/sort';
import { ContentActionTypes } from './content.action';


export interface ContentState extends EntityState<Content> {
  displayContent: null | Array<Content>;
  userContent:null | Array<any>
}

export const contentAdapter: EntityAdapter<Content> = createEntityAdapter<Content>({
  selectId: (content: Content) => content.contentId
})


export const contentInitialState: ContentState = contentAdapter.getInitialState({
  displayContent: [],
  userContent: []
})


const { selectAll, selectEntities, selectIds } = contentAdapter.getSelectors();

export const selectAllContent = selectAll;
export const selectAllContentEntities = selectEntities;


export function contentReducer(state: ContentState = contentInitialState, action): ContentState {
  switch (action.type) {
    case ContentActionTypes.ContentsLoaded:
      return contentAdapter.addMany(action.payload, state)

    case ContentActionTypes.FilterContent:
      return filterDisplayContent(state, action)

    case ContentActionTypes.SortContent:
      return sortDisplayContent(state, action)
    case ContentActionTypes.ContentUpdated:
      return handleContentUpdated(state, action)
    case ContentActionTypes.UserContentLoaded:
      return handleUserContentLoaded(state , action)
    default: return state
  }
}

function handleContentUpdated(state: ContentState, action): ContentState {
  const newState = { ...state }
  const updatedContent = action.payload.updated;
  const userContent = {...newState.userContent}
  userContent[updatedContent.contentId] = updatedContent;
  newState.userContent = userContent;
  return newState;
}

function handleUserContentLoaded(state: ContentState, action):ContentState{
  const newState = { ...state }
  let userContent = action.payload;
  newState.userContent = userContent;

  const allContentEntities = selectAllContentEntities(state);
  let displayContent = [];
  Object.keys(allContentEntities).forEach(key => {
    let content = {...allContentEntities[key] }
    if(userContent && userContent[key]){
      Object.assign(content, userContent[key])
    }
    displayContent.push(content)
  })

  newState.displayContent = displayContent;
  return newState;
}

function filterDisplayContent(state: ContentState, action): ContentState {


  const filterTerm = action.payload.appliedFilters[0];
  const filterMode = action.payload.type;
  const newState = Object.assign({}, state);
  const allContentEntities = selectAllContentEntities(state);
  let allContents = [];


  Object.keys(allContentEntities).forEach(key => {
    allContents.push(allContentEntities[key])
  })

  let filterFunction;
  switch (FilterTypeMapping[filterMode]) {
    case FilterType.Genre: filterFunction = (allContents: Array<Content>, filterValue) => {
      return allContents.filter(content => checkList(content.genres, filterTerm))
    }
      break;
    case FilterType.Language: filterFunction = (allContents: Array<Content>, filterValue) => {
      return allContents.filter(content => content.language.toUpperCase() === filterValue.toUpperCase())
    }
      break;
    case FilterType.None: filterFunction = (allContents, filterValue) => allContents;
  }

  let filterResult = filterFunction(allContents, filterTerm)

  newState.displayContent = filterResult;
  return newState;
}

function checkList(list, key) {
  return list.map(ele => ele.toUpperCase()).indexOf(key.toUpperCase()) > -1
}

function sortDisplayContent(state: ContentState, action): ContentState {
  const sortExpression: SortExpression = action.payload;
  const sortOrder = sortExpression.order;
  const sortByField = sortExpression.sortBy;
  const sortByFieldDataType = SortByDataTypeMap[sortByField]
  let sortedDisplayContents = [];
  const newState = { ...state };
  const contentsToSort = [...newState.displayContent];

  switch (SortOrderMap[sortOrder]) {
    case SortOrder.ASCENDING: sortedDisplayContents = sortByAscending(contentsToSort, sortByField , sortByFieldDataType)
      break;
    case SortOrder.DESCENDING: sortedDisplayContents = sortBydescending(contentsToSort, sortByField , sortByFieldDataType)
      break;
    default:
      return newState;
  }

  newState.displayContent = sortedDisplayContents;
  return newState;
}


function sortByAscending(allContents: Array<Content>, sortByField , dataType = "string") {

  sortByField = sortByField.toLowerCase();
  let compareFunction = function compare(a: Content, b: Content) {
    if (a[sortByField] < b[sortByField]) {
      return -1;
    }
    if (a[sortByField] >= b[sortByField]) {
      return 1;
    }
    return 0;
  }

  let dateCompareFunction = ((a, b) => new Date(a[sortByField]).getTime() - new Date(b[sortByField]).getTime())
  if(dataType == "date")
    return allContents.sort(dateCompareFunction)
  return allContents.sort(compareFunction)
}

function sortBydescending(allContents: Array<Content>, sortByField , dataType = "string") {
  sortByField = sortByField.toLowerCase();
  let compareFunction = function compare(a: Content, b: Content) {
    if (a[sortByField] < b[sortByField]) {
      return 1;
    }
    if (a[sortByField] >= b[sortByField]) {
      return -1;
    }
    return 0;
  }
  let dateCompareFunction = ((a, b) => new Date(b[sortByField]).getTime() - new Date(a[sortByField]).getTime())

  if(dataType == "date")
    return allContents.sort(dateCompareFunction)
  return allContents.sort(compareFunction)
}


function handleUpdateContent() {

}


// sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

