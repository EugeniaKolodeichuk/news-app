import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
