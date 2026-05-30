import { baseApi } from '@/app/api/baseApi.ts'
import type { baseRequestType, movieDetailsType } from '@/features/film-page/model/types/types.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { movieDetailsSchema } from '@/features/film-page/model/schemas/schemas.ts'

//todo типизация и zod

const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<movieDetailsType, baseRequestType>({
      query: ({ movie_id }) => `/movie/${movie_id}`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, movieDetailsSchema)
      },
    }),

    getSimilar: build.query<any, baseRequestType>({
      query: ({ movie_id }) => `/movie/${movie_id}/similar`,
      // onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   zodValidate(dispatch, queryFulfilled, movieDetailsSchema)
      // },
    }),

    getCredits: build.query<any, baseRequestType>({
      query: ({ movie_id }) => `movie/${movie_id}/credits`,
    }),
  }),
})

export const { useGetDetailsQuery, useGetSimilarQuery, useGetCreditsQuery } = movieApi
