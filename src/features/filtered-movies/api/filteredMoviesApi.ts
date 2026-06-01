import { baseApi } from '@/app/api/baseApi.ts'

import { zodValidate } from '@/common/utils/zodValidate.ts'
import { getGenresMovieListSchema } from '@/features/filtered-movies/model/schemas/schemas.ts'
import type { getBaseResponseType } from '@/common/types/types.ts'
import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
import type {
  getDiscoverMovieParamsType,
  getGenresMovieListType,
} from '@/features/filtered-movies/model/types/types.ts'

const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGenresMovieList: build.query<getGenresMovieListType, void>({
      query: () => `genre/movie/list`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getGenresMovieListSchema)
      },
    }),

    getDiscoverMovie: build.query<getBaseResponseType, getDiscoverMovieParamsType>({
      query: (params) => ({
        url: `discover/movie`,
        params,
      }),
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),
  }),
})

export const { useGetGenresMovieListQuery, useGetDiscoverMovieQuery } = filteredMoviesApi
