import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ThemeSliceReducer } from './slices';
import { MusicAPI } from '@/entities/music/model/music.model.ts'

const rootReducer = combineReducers({
  ThemeReducer: ThemeSliceReducer,
  [MusicAPI.reducerPath]: MusicAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      MusicAPI.middleware,
    ),
});

export type TypedRootState = ReturnType<typeof store.getState>;