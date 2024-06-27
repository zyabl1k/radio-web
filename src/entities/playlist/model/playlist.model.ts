import { __APPLICATION__ } from '@/shared/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICreatePlaylist, IMusic, IPlaylist, IPlayList } from '@types'

export const PlaylistAPI = createApi({
  reducerPath: 'playlist/api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION__.baseUrl,
  }),
  tagTypes: ['Playlist'],
  endpoints: (build) => ({
    GetPlayList: build.query<IPlayList, number>({
      query: (page: number) => ({
        url: `PlayList/GetPlayListLimit?limit=${__APPLICATION__.limit}&currentPage=${page}`,
        method: 'GET',
      }),
      providesTags: ['Playlist'],
      transformResponse: (response: IPlayList) => response,
    }),
    GetPlaylistById: build.query<IPlaylist, number>({
      query: (id: number) => ({
        url: `PlayList/GetPlayListId?id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Playlist'],
      transformResponse: (response: IPlaylist) => response,
    }),
    GetMusicPlaylist: build.query<IMusic[], string>({
      query: (name: string) => ({
        url: `Music/GetMusicPlayListTag?name=${name}`,
        method: 'GET',
      }),
      providesTags: ['Playlist'],
      transformResponse: (response: IMusic[]) => response,
    }),
    DeletePlaylist: build.mutation<boolean, number>({
      query: (id) => ({
        url: `PlayList/DeletePlayList?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Playlist'],
      transformResponse: (response: boolean) => response,
    }),
    CreatePlaylist: build.mutation<boolean, ICreatePlaylist>({
      query: (data) => {
        const formFile = new FormData();
        formFile.append('formFile', data.file);

        return {
          url: `PlayList/CreatePlayList?name=${data.name}&description=${data.description}`,
          method: 'POST',
          body: formFile
        };
      },
      invalidatesTags: ['Playlist'],
      transformResponse: (response: boolean) => response,
    }),
  })
})

export const {
  useGetPlayListQuery,
  useDeletePlaylistMutation,
  useCreatePlaylistMutation,
  useGetPlaylistByIdQuery,
  useGetMusicPlaylistQuery
} = PlaylistAPI