import { baseApi } from '@/app/api/baseApi.ts'
//todo zod
export type getPopularRequestType = {
  page: number
  results: movieInfo[]
  total_pages: number
  total_results: number
}

export type movieInfo = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: number
  release_date: number
  softcore: boolean
  video: boolean
  vote_average: number
  vote_count: number
}

//todo getUpcoming getNowPlaying додулать типизацию
// "dates": {
//   "maximum": "2023-05-23",
//     "minimum": "2023-05-04"
const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getPopularRequestType, void>({
      query: () => `movie/popular`,
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
