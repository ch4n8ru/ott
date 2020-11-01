export interface Content{
    contentId: string,
    title:string,
    rating?:any,
    language: string,
    added:Date,
    genres: Array<string>,
    cast:Array<string>
}