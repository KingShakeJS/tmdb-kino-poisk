import { baseApi } from '@/app/api/baseApi.ts'
import type {
  baseRequestType,
  getCreditsType,
  movieDetailsType,
} from '@/features/film-page/model/types/types.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { getCreditsSchema, getDetailsSchema } from '@/features/film-page/model/schemas/schemas.ts'
import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
import type { getBaseResponseType } from '@/common/types/types.ts'

const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<movieDetailsType, baseRequestType>({
      query: ({ movie_id }) => `/movie/${movie_id}`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getDetailsSchema)
      },
    }),

    getSimilar: build.query<getBaseResponseType, baseRequestType>({
      query: ({ movie_id }) => `/movie/${movie_id}/similar`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),

    getCredits: build.query<getCreditsType, baseRequestType>({
      query: ({ movie_id }) => `movie/${movie_id}/credits`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getCreditsSchema)
      },
    }),
  }),
})

export const { useGetDetailsQuery, useGetSimilarQuery, useGetCreditsQuery } = movieApi
