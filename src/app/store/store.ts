import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThemeSliceReducer } from './slices';

const rootReducer = combineReducers({
  ThemeReducer: ThemeSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export type TypedRootState = ReturnType<typeof store.getState>;