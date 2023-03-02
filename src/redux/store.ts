import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { postsReducer, PostState } from './reducers/postsReducer.ts';
import { userReducer, UserState } from './reducers/userReducer.ts';

export interface RootState {
  posts: PostState;
  name: UserState;
}

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, userReducer);

const rootReducer = combineReducers({
  posts: postsReducer,
  name: persistedReducer,
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
