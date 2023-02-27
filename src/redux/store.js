import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  userName: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
