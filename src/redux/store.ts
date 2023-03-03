import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import postReducer from './features/postsSlice';
import userReducer, { addUserName } from './features/userSlice';

const listener = createListenerMiddleware();
listener.startListening({
  actionCreator: addUserName,
  effect: action => {
    const user = action.payload;
    window.localStorage.setItem('user', user);
  },
});

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listener.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
