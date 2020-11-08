import { User } from './user';
/**
 * Shape for Auth state
 */
export interface  AuthState{
    isLoggedIn:boolean,
    userId:string,
    authToken?:string,
    rights:UserRights,
    user:any,
    redirectUrl:string
}

/**
 * Access control for users
 */
export enum UserRights{
    "NONE",
    "FULL",
    "UPLOAD",
    "VIEW",
    "DELETE"
}