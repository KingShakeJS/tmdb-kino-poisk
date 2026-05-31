import { baseApi } from '@/app/api/baseApi.ts'
import { getGenresMovieListType } from '@/features/filtered-movies/model/types/types.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { getGenresMovieListSchema } from '@/features/filtered-movies/model/schemas/schemas.ts'

const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGenresMovieList: build.query<getGenresMovieListType, void>({
      query: () => `genre/movie/list`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getGenresMovieListSchema)
      },
    }),
    //todo zod  type
    getDiscoverMovie: build.query<any, any>({
      query: (params) => ({
        url: `discover/movie`,
        params,
      }),
    }),
  }),
})

export const { useGetGenresMovieListQuery, useGetDiscoverMovieQuery } = filteredMoviesApi
