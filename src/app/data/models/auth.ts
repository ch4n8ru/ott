import { User } from './user';

export interface  AuthState{
    isLoggedIn:boolean,
    userId:string,
    authToken?:string,
    rights:UserRights,
    user:any
}

export enum UserRights{
    "NONE",
    "FULL",
    "UPLOAD",
    "VIEW",
    "DELETE"
}