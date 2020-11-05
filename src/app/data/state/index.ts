import { contentReducer, ContentState } from './content/content.reducer';
import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';
import { AuthState } from '../models/auth';
import { authReducer } from './auth/auth.reducer';

export interface AppState {
    Auth: AuthState,
    Content : ContentState,
}

export const reducers : ActionReducerMap<AppState> = {
    Auth:authReducer,
    Content : contentReducer
}

export const selectDisplayContents = (state:AppState) => state.Content.displayContent