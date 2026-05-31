import { baseApi } from '@/app/api/baseApi.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { type getResponseWithDateType } from '@/features/main/model/types/types.ts'
import { getResponseWithDateSchema } from '@/features/main/model/schemas/schemas.ts'
import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
import { type getBaseResponseType } from '@/common/types/types.ts'

const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getBaseResponseType, void>({
      query: () => `movie/popular`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),

    getTopRated: build.query<getBaseResponseType, void>({
      query: () => `movie/top_rated`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),
    getUpcoming: build.query<getResponseWithDateType, void>({
      query: () => `movie/upcoming`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getResponseWithDateSchema)
      },
    }),
    getNowPlaying: build.query<getResponseWithDateType, void>({
      query: () => `movie/now_playing`,
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
