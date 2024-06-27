import { __APPLICATION__ } from '@/shared/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreateMusic, IMusicList } from '@types'

export const MusicAPI = createApi({
  reducerPath: 'music/api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION__.baseUrl,
  }),
  tagTypes: ['Music'],
  endpoints: (build) => ({
    GetMusicList: build.query<IMusicList, number>({
      query: (page: number) => ({
        url: `Music/GetMusicLimit?limit=${__APPLICATION__.limit}&currentPage=${page}`,
        method: 'GET',
      }),
      providesTags: ['Music'],
      transformResponse: (response: IMusicList) => response,
    }),
    DeleteMusic: build.mutation<boolean, number>({
      query: (id) => ({
        url: `Music/DeleteMusicId?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Music'],
      transformResponse: (response: boolean) => response,
    }),
    StartMusic: build.mutation<boolean, number>({
      query: (id) => ({
        url: `Music/PlayMusic?idMusic=${id}`,
        method: 'POST',
        body: [0]
      }),
      invalidatesTags: ['Music'],
      transformResponse: (response: boolean) => response,
    }),
    CreateMusic: build.mutation<boolean, ICreateMusic>({
      query: (data) => {
        const formFile = new FormData();
        formFile.append('formFile', data.file);

        return {
          url: `Music/SaveMusic?namePlayList=${data.namePlayList}`,
          method: 'POST',
          body: formFile
        };
      },
      invalidatesTags: ['Music'],
      transformResponse: (response: boolean) => response,
    }),
  })
})

export const {
  useGetMusicListQuery,
  useDeleteMusicMutation,
  useCreateMusicMutation,
  useStartMusicMutation,
} = MusicAPI