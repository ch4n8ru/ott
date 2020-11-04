export interface SortExpressionType {
    order:SortOrder,
    sortBy?:string
}

export class SortExpression implements SortExpressionType{
    order;
    sortBy;
    constructor(order:SortOrder , sortBy:string){
        this.order = order;
        this.sortBy = sortBy;
    }
}

export enum Sortby{
    "Rating",
    "Added"
}

export enum SortOrder{
    "None",
    "ASCENDING",
    "DESCENDING",
}

export const SortOrderMap = {
    "0":SortOrder.ASCENDING,
    "1":SortOrder.DESCENDING
}

