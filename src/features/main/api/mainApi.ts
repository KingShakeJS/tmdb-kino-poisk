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

const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getPopularRequestType, void>({
      query: () => `movie/popular`,
    }),
  }),
})

export const { useGetPopularQuery } = mainApi
