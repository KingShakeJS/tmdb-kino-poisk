import { baseApi } from '@/app/api/baseApi.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { type getPopularResponsetType } from '@/features/main/model/types/types.ts'
import { getPopularResponseSchema } from '@/features/main/model/schemas/schemas.ts'
//todo zod
//todo getUpcoming getNowPlaying getTopRated додулать типизацию и валидацию

const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getPopularResponsetType, void>({
      query: () => `movie/popular`,
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getPopularResponseSchema)
      },
    }),

    getTopRated: build.query<getPopularRequestType, void>({
      query: () => `movie/top_rated`,
    }),
    getUpcoming: build.query<getPopularRequestType, void>({
      query: () => `movie/upcoming`,
    }),
    getNowPlaying: build.query<getPopularRequestType, void>({
      query: () => `movie/now_playing`,
    }),
  }),
})

export const {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetNowPlayingQuery,
} = mainApi
