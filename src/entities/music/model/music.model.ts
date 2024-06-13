import { __APPLICATION__ } from '@/shared/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateMusic, IMusic } from '@types'

export const MusicAPI = createApi({
  reducerPath: 'music/api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION__.baseUrl,
  }),
  tagTypes: ['Music', 'Musics'],
  endpoints: (build) => ({
    GetMusicList: build.query<IMusic[], void>({
      query: () => ({
        url: `Music/GetMusicLimit?limit=${__APPLICATION__.limit}`,
        method: 'GET',
      }),
      providesTags: ['Musics'],
      transformResponse: (response: IMusic[]) => response,
    }),
    DeleteMusic: build.mutation<boolean, number>({
      query: (id) => ({
        url: `Music/DeleteMusicId?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Music'],
      transformResponse: (response: boolean) => response,
    }),
    CreateMusic: build.mutation<boolean, ICreateMusic>({
      query: (data) => ({
        url: `Music/SaveMusic?namePlayList=${data.namePlayList}`,
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data.file
      }),
      invalidatesTags: ['Music'],
      transformResponse: (response: boolean) => response,
    }),
  })
})

export const {
  useGetMusicListQuery,
  useDeleteMusicMutation,
  useCreateMusicMutation,
} = MusicAPI