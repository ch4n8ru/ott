import { contentReducer, ContentState } from './content/content.reducer';
import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';

export interface AppState {
    Content : ContentState
}

export const reducers : ActionReducerMap<AppState> = {
    Content : contentReducer
}

export const selectDisplayContents = (state:AppState) => state.Content.displayContent