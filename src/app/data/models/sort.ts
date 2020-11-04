export interface SortExpression {
    type:SortType,
    sortBy?:string
}

export enum SortType{
    "Rating",
    "Added"
}

