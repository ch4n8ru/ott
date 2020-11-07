
import { AuthState, UserRights } from '../../models/auth';
import { AuthActionTypes } from './auth.action';

export const authInitialState:AuthState = {
    userId : null,
    rights: UserRights.NONE,
    authToken:"",
    user: null,
    isLoggedIn:false
}

function getAuthInitialState():AuthState{
    let authStatus = localStorage.getItem("AUTH");
    if(authStatus){
        return JSON.parse(authStatus)
    }
    return authInitialState
}



export function authReducer(state:AuthState = getAuthInitialState() , action):AuthState{
    switch(action.type){
       case AuthActionTypes.LoginSuccess: return handleLogin(state , action)
       case AuthActionTypes.LoginFailure : return state
       default: return state
    }
    
}


function handleLogin(state:AuthState , action){
    console.log(action);
    const newState = {...state}
    newState.user = action.payload.validUser;
    newState.userId = newState.user.userId;
    newState.isLoggedIn = true;
    localStorage.setItem("AUTH" , JSON.stringify(newState))
    return newState
}

