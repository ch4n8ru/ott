import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-browse-content',
  templateUrl: './browse-content.component.html',
  styleUrls: ['./browse-content.component.css']
})
export class BrowseContentComponent extends HomeComponent implements OnInit {
  filterMode: string = 'NONE';
  filterValue: string = 'NONE';
  filterFields: Array<string>;
  filterMap: Map<string, Array<string>>;

  sortMode:string = "NONE";
  sortType:string = "NONE"
  sortFields:Array<string>;
  availableSortTypes:Array<string>;


  constructor() {
    super();
    this.filterMap = new Map();
    this.filterFields = ["GENRE", "LANGUAGE"]
    this.filterMap["GENRE"] = ["ACTION", "ADVENTURE", "THRILLER"]
    this.filterMap["LANGUAGE"] = ["TAMIL", "ENGLISH", "HINDI"]

    this.sortFields = ["RATING" , "ADDED"];
    this.availableSortTypes = ["ASC" , "DESC"]

  }


  ngOnInit(): void {

  }


  onFilterChange($event) {
    console.log($event);
    let filterTerm = $event;
    if(!filterTerm) this.filterMode="NONE"
    this.displayContents = this.filterBy(filterTerm);
  }

  filterBy(filterTerm) {
    let filterFunction;
    switch (this.filterMode) {
      case "GENRE": filterFunction = (allContents: Array<Content>, filterValue) => {
        return allContents.filter(content => this.checkList(content.genres, filterTerm))
      }
        break;
      case "LANGUAGE": filterFunction = (allContents: Array<Content>, filterValue) => {
        return allContents.filter(content => content.language.toUpperCase() === filterValue.toUpperCase())
      }
        break;
      case "NONE": filterFunction = (allContents, filterValue) => allContents;
    }

    let filterResult = filterFunction(this.allContents, filterTerm)
    return [...filterResult]
  }

  checkList(list, key) {
    return list.map(ele => ele.toUpperCase()).indexOf(key.toUpperCase()) > -1
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
