/**
 * Shape for Filter operation 
 */
export interface FilterExpressionType{
    type:FilterType,
    appliedFilters?:Array<FilterType>,
    filterName?: string
}

export class FilterExpression implements FilterExpressionType{
    type;
    appliedFilters;
    filterName
    constructor(type , appliedFilters = [] , filterName = ''){
        this.type = type;
        this.appliedFilters = appliedFilters;
        this.filterName = filterName;
    }
}

export enum FilterType{
    "None",
    "Genre",
    "Language"
}


/**
 * Mappings to render in UI
 */
export const FilterTypeMapping = {
    "0":FilterType.None,
    "1":FilterType.Genre,
    "2":FilterType.Language,
}

