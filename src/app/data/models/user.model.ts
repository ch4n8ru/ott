import { Content } from './content';

export interface UserInterface{
    username:string,
    userId:string,
    recentSearches?:Array<string>,
    userContent:Array<Map<string , Content>>
}