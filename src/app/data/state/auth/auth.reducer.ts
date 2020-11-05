
import { AuthState, UserRights } from '../../models/auth';
import { AuthActionTypes } from './auth.action';

export const authInitialState:AuthState = {
    userId : null,
    rights: UserRights.NONE,
    authToken:"",
    user: null,
    isLoggedIn:false
}



export function authReducer(state:AuthState = authInitialState , action):AuthState{
    switch(action.type){
       case AuthActionTypes.LoginSuccess: return handleLogin(state , action)
       case AuthActionTypes.LoginFailure : return state
       default: return state
    }
    
}


function handleLogin(state , action){
    console.log(action)
    return state
}