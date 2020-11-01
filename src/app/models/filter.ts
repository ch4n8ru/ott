export interface FilterBy{
    type:FilterType,
    appliedFilters:Array<FilterType>,
    filterValues: Map<string , Array<string>>
}

export enum FilterType{
    "Genre",
    "Language"
}