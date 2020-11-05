import { User } from './user';

export interface  AuthState{
    isLoggedIn:boolean,
    userId:string,
    authToken?:string,
    rights:UserRights,
    user:User
}

export enum UserRights{
    "NONE",
    "FULL",
    "UPLOAD",
    "VIEW",
    "DELETE"
}