import { act } from '@ngrx/effects';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Content } from '../../models/content';
import { FilterExpression, FilterType, FilterTypeMapping } from '../../models/filter';
import { ContentActionTypes } from './content.action';


export interface ContentState extends EntityState<Content>{
    displayContent:null | Array<Content>;
}

export const contentAdapter:EntityAdapter<Content> = createEntityAdapter<Content>({
    selectId : (content : Content) => content.contentId
})


export const contentInitialState: ContentState = contentAdapter.getInitialState({
    displayContent: [],
}) 


export function contentReducer(state:ContentState = contentInitialState, action):ContentState{
    switch(action.type){
        case ContentActionTypes.ContentsLoaded : 
            return handleNewContentLoaded(contentAdapter.addMany(action.payload , state ) , action)
        
        case ContentActionTypes.FilterContent:
            return filterDisplayContent(state , action)

        default: return state
    }
}

function handleNewContentLoaded( state:ContentState , action):ContentState{
    const newState = {...state}
    newState.displayContent = action.payload;
    return newState;
}

function filterDisplayContent(state:ContentState , action:FilterExpression) : ContentState{
        const filterTerm = action.appliedFilters[0];
        const filterMode = action.type;
        let filterFunction;
        switch (FilterTypeMapping[filterMode]) {
          case FilterType.Genre: filterFunction = (allContents: Array<Content>, filterValue) => {
            return allContents.filter(content => this.checkList(content.genres, filterTerm))
          }
            break;
          case FilterType.Language: filterFunction = (allContents: Array<Content>, filterValue) => {
            return allContents.filter(content => content.language.toUpperCase() === filterValue.toUpperCase())
          }
            break;
          case FilterType.None: filterFunction = (allContents, filterValue) => allContents;
        }
    
        let filterResult = filterFunction(this.allContents, filterTerm)
        
      
    
     
}

function checkList(list, key) {
    return list.map(ele => ele.toUpperCase()).indexOf(key.toUpperCase()) > -1
  }



const { selectAll , selectEntities , selectIds } = contentAdapter.getSelectors();

export const selectAllTasks = selectAll;
export const selectAllTaskEntities = selectEntities;
