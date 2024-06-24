import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PaginationSliceReducer, ThemeSliceReducer } from './slices'
import { MusicAPI } from '@/entities/music/model/music.model.ts'
import { PlaylistAPI } from '@/entities/playlist/model/playlist.model.ts'

const rootReducer = combineReducers({
  PaginationReducer: PaginationSliceReducer,
  ThemeReducer: ThemeSliceReducer,
  [PlaylistAPI.reducerPath]: PlaylistAPI.reducer,
  [MusicAPI.reducerPath]: MusicAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      MusicAPI.middleware,
      PlaylistAPI.middleware,
    ),
});

export type TypedRootState = ReturnType<typeof store.getState>;