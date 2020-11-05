import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Content } from 'src/app/data/models/content';
import { FilterExpression, FilterExpressionType, FilterType, FilterTypeMapping } from 'src/app/data/models/filter';
import { ContentState } from 'src/app/data/state/content/content.reducer';
import { HomeComponent } from '../home/home.component';
import { select, Store } from '@ngrx/store';
import { FilterContent, LoadContents, SortContent } from 'src/app/data/state/content/content.action';
import { SortExpression, SortOrder } from 'src/app/data/models/sort';


@Component({
  selector: 'app-browse-content',
  templateUrl: './browse-content.component.html',
  styleUrls: ['./browse-content.component.css']
})
export class BrowseContentComponent extends HomeComponent implements OnInit {
  filterMode: FilterType = FilterType.None;
  filterValue: string = 'NONE';
  filterFields: Array<FilterExpressionType>;
  filterMap: Map<FilterType, Array<string>>;

  sortBy: string = "NONE";
  sortOrder: SortOrder = SortOrder.None
  sortFields: Array<string>;
  availableSortOrders;


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
    this.availableSortOrders = [{order:SortOrder.ASCENDING , name: "ASCENDING"} ,{order:SortOrder.DESCENDING , name: "DESCENDING"}]

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

    let appliedFilters = []
    appliedFilters.push(filterTerm);
    let payload = new FilterExpression(filterMode, appliedFilters)
    this.store.dispatch(new FilterContent(payload));
    // this.displayContents = this.filterBy(filterTerm, filterMode);
  }



  resetFilterTerm() {
    if (this.filterValue != "NONE") {
      this.filterMode = FilterType.None;
      this.filterValue = "NONE"
    }
    // REset filter action
    let appliedFilters = []
    let payload = new FilterExpression(FilterType.None, appliedFilters)
    this.store.dispatch(new FilterContent(payload));
    // this.displayContents = this.filterBy('', FilterType.None)
  }


  onSortChange($event) {
    if(!(this.sortBy === "NONE")){
      let sortExpression = new SortExpression(this.sortOrder , this.sortBy);
      this.store.dispatch(new SortContent(sortExpression));
    }
    
    // this.displayContents = sortedResult;
  }

 
}
