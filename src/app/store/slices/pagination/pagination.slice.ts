import { initialStatePagination } from '@types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: initialStatePagination = {
  music: 1,
  playlist: 1,
}

export const PaginationSlice = createSlice({
  name: 'Pagination',
  initialState,
  reducers: {
    setPageMusic: (state, action) => {
      state.music = action.payload;
    },
    setPagePlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
})

export const PaginationSliceReducer = PaginationSlice.reducer;
export const PaginationSliceActions = PaginationSlice.actions;
