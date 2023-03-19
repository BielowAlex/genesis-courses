import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer, lessonReducer, progresReducer } from './slices';

const rootReducer = combineReducers({
  coursesReducer,
  lessonReducer,
  progresReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
  RootState,
  AppStore,
  AppDispatch,
};
