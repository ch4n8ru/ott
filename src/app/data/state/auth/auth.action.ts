import { Action } from '@ngrx/store';


export enum AuthActionTypes  {
    Login  = "[Auth] Login",
    LoginSuccess = "[Auth] Login success",
    LoginFailure = "[Auth] Login Failed",
    SetRedirectURL = "[AUTH] Set redirect Url",
    LogOut = "[Auth] Logout",
    LogOutComplete = "[Auth] LogOut success"
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

export class SetRedirectURL implements Action{
    readonly type = AuthActionTypes.SetRedirectURL
    constructor(public payload:string){
    }
}

export class LogOut implements Action{
    readonly type = AuthActionTypes.LogOut
    constructor(){
    }
}
export class LogOutComplete implements Action{
    readonly type = AuthActionTypes.LogOutComplete
    constructor(){
    }
}






export type AuthActions = Login |
LoginSuccess|
LoginFailure|
SetRedirectURL|
LogOut|
LogOutComplete