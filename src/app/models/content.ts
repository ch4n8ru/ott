export interface Content{
    contentId: string,
    title:string,
    type:ContentType,
    rating?:any,
    language: string,
    added:Date,
    genres: Array<string>,
    cast:Array<string>,
}

export interface ContentType{
    "Movie",
    "Series"
}