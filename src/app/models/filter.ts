export interface FilterBy{
    type:FilterType,
    appliedFilters?:Array<FilterType>,
    filterValue: string
}

export enum FilterType{
    "None",
    "Genre",
    "Language"
}

export const FilterTypeMapping = {
    "0":FilterType.None,
    "1":FilterType.Genre,
    "2":FilterType.Language,
}