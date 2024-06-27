import { __APPLICATION__ } from '@/shared/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IScenarioList } from '@types'

export const ScenarioAPI = createApi({
  reducerPath: 'scenario/api',
  baseQuery: fetchBaseQuery({
    baseUrl: __APPLICATION__.baseUrl,
  }),
  tagTypes: ['Scenario'],
  endpoints: (build) => ({
    GetScenarioList: build.query<IScenarioList, number>({
      query: (page: number) => ({
        url: `Scenario/GetScenarioLimit?limit=${__APPLICATION__.limit}&currentPage=${page}`,
        method: 'GET',
      }),
      providesTags: ['Scenario'],
      transformResponse: (response: IScenarioList) => response,
    }),
  })
})

export const {
  useGetScenarioListQuery,
} = ScenarioAPI