import { contentReducer, ContentState } from './content/content.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AuthState } from '../models/auth';
import { authReducer } from './auth/auth.reducer';

export interface AppState {
  Auth: AuthState;
  Content: ContentState;
}

export const reducers: ActionReducerMap<AppState> = {
  Auth: authReducer,
  Content: contentReducer,
};

export const selectDisplayContents = (state: AppState) => {
  const displayContent = state.Content.displayContent;
  const userContent = state.Content.userContent;

  let userDisplayContent = [];
  displayContent.forEach((content) => {
    content = { ...content };
    if (userContent && userContent[content.contentId]) {
      content = Object.assign(content, userContent[content.contentId]);
    }
    userDisplayContent.push(content);
  });
  return userDisplayContent;
};
