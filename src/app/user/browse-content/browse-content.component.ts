import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { FilterBy, FilterType ,FilterTypeMapping } from 'src/app/models/filter';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-browse-content',
  templateUrl: './browse-content.component.html',
  styleUrls: ['./browse-content.component.css']
})
export class BrowseContentComponent extends HomeComponent implements OnInit {
  filterMode: FilterType = FilterType.None;
  filterValue: string = 'NONE';
  filterFields: Array<FilterBy>;
  filterMap: Map<FilterType, Array<string>>;

  sortMode:string = "NONE";
  sortType:string = "NONE"
  sortFields:Array<string>;
  availableSortTypes:Array<string>;


  constructor() {
    super();
    this.filterMap = new Map();
    this.filterFields = [
      {type: FilterType.Genre , filterName:"GENRE"},
      {type: FilterType.Language , filterName:"LANGUAGE"}
    ]
    this.filterMap[FilterType.Genre] = ["ACTION", "ADVENTURE", "THRILLER"]
    this.filterMap[FilterType.Language] = ["TAMIL", "ENGLISH", "HINDI"]

    this.sortFields = ["RATING" , "ADDED"];
    this.availableSortTypes = ["ASC" , "DESC"]

  }


  ngOnInit(): void {

  }


  onFilterChange($event) {
    console.log($event);
    let filterTerm = $event;
    let filterMode = this.filterMode;
    if(filterTerm == "NONE")
      filterMode = FilterType.None
    this.displayContents = this.filterBy(filterTerm , filterMode);
  }

  filterBy(filterTerm , filterMode) {
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
    return [...filterResult]
  }

  checkList(list, key) {
    return list.map(ele => ele.toUpperCase()).indexOf(key.toUpperCase()) > -1
  }

  resetFilterTerm(){
    if(this.filterValue != "NONE"){
      this.filterMode= FilterType.None;
      this.filterValue="NONE"
    }
    this.displayContents = this.filterBy('' ,FilterType.None )
  }


  onSortChange($event){
      let sortByField = this.sortMode;
      let sortedResult;
      switch(this.sortType){
        case "ASC":  sortedResult = this.sortByAscending([...this.displayContents] ,sortByField)
        break;
        case "DESC": sortedResult = this.sortBydescending([...this.displayContents] ,sortByField)
        break;
      }
      this.displayContents = sortedResult;
  }

  sortByAscending(allContents:Array<Content> , sortByField){
    sortByField = sortByField.toLowerCase();
    let compareFunction = function compare( a:Content, b:Content ) {
      if ( a[sortByField] < b[sortByField] ){
        return -1;
      }
      if ( a[sortByField] > b[sortByField] ){
        return 1;
      }
      return 0;
    }
    return allContents.sort(compareFunction)
  }

  sortBydescending(allContents:Array<Content> , sortByField){
    sortByField = sortByField.toLowerCase();
    let compareFunction = function compare( a:Content, b:Content ) {
      if ( a[sortByField] < b[sortByField] ){
        return 1;
      }
      if ( a[sortByField] > b[sortByField] ){
        return -1;
      }
      return 0;
    }
    return allContents.sort(compareFunction)
  }
  
}
