import { baseApi } from '@/app/api/baseApi.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { type getResponseWithDateType } from '@/features/main/model/types/types.ts'
import { getResponseWithDateSchema } from '@/features/main/model/schemas/schemas.ts'
import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
import { type getBaseResponseType } from '@/common/types/types.ts'

const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getBaseResponseType, { params: { page: number } }>({
      query: ({ params }) => ({
        url: `movie/popular`,
        params,
      }),

      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),

    getTopRated: build.query<getBaseResponseType, { params: { page: number } }>({
      query: ({ params }) => ({
        url: `movie/top_rated`,
        params,
      }),
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),
    getUpcoming: build.query<getResponseWithDateType, { params: { page: number } }>({
      query: ({ params }) => ({
        url: `movie/upcoming`,
        params,
      }),

      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getResponseWithDateSchema)
      },
    }),
    getNowPlaying: build.query<getResponseWithDateType, { params: { page: number } }>({
      query: ({ params }) => ({
        url: `movie/now_playing`,
        params,
      }),
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getResponseWithDateSchema)
      },
    }),
  }),
})

export const {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetNowPlayingQuery,
} = mainApi
