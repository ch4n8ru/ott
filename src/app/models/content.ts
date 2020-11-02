export interface Content{
    contentId: string,
    title:string,
    duration:string,
    type:ContentType,
    rating?:any,
    language: string,
    added:Date,
    genres: Array<string>,
    cast:Array<string>,
    year:string
}

export interface ContentType{
    "Movie",
    "Series"
}