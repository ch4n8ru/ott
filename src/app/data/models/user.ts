import { UserRights } from './auth';

export interface User{
    userId:string,
    name:string,
    email:string,
    recent?:Array<string>,
    rights:UserRights
}