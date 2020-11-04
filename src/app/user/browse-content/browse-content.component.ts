import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Content } from 'src/app/data/models/content';
import { FilterExpression, FilterType, FilterTypeMapping } from 'src/app/data/models/filter';
import { ContentState } from 'src/app/data/state/content/content.reducer';
import { HomeComponent } from '../home/home.component';
import { select, Store } from '@ngrx/store';
import { FilterContent, LoadContents } from 'src/app/data/state/content/content.action';


@Component({
  selector: 'app-browse-content',
  templateUrl: './browse-content.component.html',
  styleUrls: ['./browse-content.component.css']
})
export class BrowseContentComponent extends HomeComponent implements OnInit {
  filterMode: FilterType = FilterType.None;
  filterValue: string = 'NONE';
  filterFields: Array<FilterExpression>;
  filterMap: Map<FilterType, Array<string>>;

  sortMode: string = "NONE";
  sortType: string = "NONE"
  sortFields: Array<string>;
  availableSortTypes: Array<string>;


  constructor(injector: Injector) {
    super(injector);
    this.filterMap = new Map();
    this.filterFields = [
      { type: FilterType.Genre, filterName: "GENRE" },
      { type: FilterType.Language, filterName: "LANGUAGE" }
    ]
    this.filterMap[FilterType.Genre] = ["ACTION", "ADVENTURE", "THRILLER"]
    this.filterMap[FilterType.Language] = ["TAMIL", "ENGLISH", "HINDI"]

    this.sortFields = ["RATING", "ADDED"];
    this.availableSortTypes = ["ASC", "DESC"]

  }


  ngOnInit(): void {
    this.store.dispatch(new LoadContents);
  }


  onFilterChange($event) {
    console.log($event);
    let filterTerm = $event;
    let filterMode = this.filterMode;
    if (filterTerm == "NONE")
      filterMode = FilterType.None
    let payload: FilterExpression;
    payload.type = this.filterMode;
    payload.appliedFilters.push(filterTerm);
    this.store.dispatch(new FilterContent(payload));
    this.displayContents = this.filterBy(filterTerm, filterMode);
  }

  

  resetFilterTerm() {
    if (this.filterValue != "NONE") {
      this.filterMode = FilterType.None;
      this.filterValue = "NONE"
    }
    this.displayContents = this.filterBy('', FilterType.None)
  }


  onSortChange($event) {
    let sortByField = this.sortMode;
    let sortedResult;
    switch (this.sortType) {
      case "ASC": sortedResult = this.sortByAscending([...this.displayContents], sortByField)
        break;
      case "DESC": sortedResult = this.sortBydescending([...this.displayContents], sortByField)
        break;
    }
    this.displayContents = sortedResult;
  }

  sortByAscending(allContents: Array<Content>, sortByField) {
    sortByField = sortByField.toLowerCase();
    let compareFunction = function compare(a: Content, b: Content) {
      if (a[sortByField] < b[sortByField]) {
        return -1;
      }
      if (a[sortByField] > b[sortByField]) {
        return 1;
      }
      return 0;
    }
    return allContents.sort(compareFunction)
  }

  sortBydescending(allContents: Array<Content>, sortByField) {
    sortByField = sortByField.toLowerCase();
    let compareFunction = function compare(a: Content, b: Content) {
      if (a[sortByField] < b[sortByField]) {
        return 1;
      }
      if (a[sortByField] > b[sortByField]) {
        return -1;
      }
      return 0;
    }
    return allContents.sort(compareFunction)
  }

}
