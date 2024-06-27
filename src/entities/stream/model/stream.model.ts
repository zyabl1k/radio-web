import { __APPLICATION__ } from '@/shared/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISendLifeSession } from '@types'

export const StreamAPI = createApi({
  reducerPath: 'stream/api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION__.baseUrl,
  }),
  tagTypes: ['Stream'],
  endpoints: (build) => ({
    SendStream: build.mutation<boolean, ISendLifeSession>({
      query: (data) => {
        const formFile = new FormData();
        formFile.append('formFile', data.file);

        return {
          url: `LifeSessionAudio/LifeSessionAudio?idController=${data.idController}`,
          method: 'POST',
          body: formFile
        };
      },
      invalidatesTags: ['Stream'],
      transformResponse: (response: boolean) => response,
    }),
  })
})

export const {
  useSendStreamMutation
} = StreamAPI