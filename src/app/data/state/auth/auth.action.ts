import { Action } from '@ngrx/store';


export enum AuthActionTypes  {
    Login  = "[Auth] Login",
    LoginSuccess = "[Auth] Login success",
    LoginFailure = "[Auth] Login Failed"
}

export class Login implements Action{
    readonly type = AuthActionTypes.Login
    constructor(public payload){
    }
}

export class LoginSuccess implements Action{
    readonly type = AuthActionTypes.LoginSuccess
    constructor(public payload){
    }
}


export class LoginFailure implements Action{
    readonly type = AuthActionTypes.LoginFailure
    constructor(public payload){
    }
}



export type AuthActions = Login |
LoginSuccess|
LoginFailure