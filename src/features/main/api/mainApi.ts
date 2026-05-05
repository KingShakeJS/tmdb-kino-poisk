import { baseApi } from '@/app/api/baseApi.ts'
//todo zod
type getPopularRequestType = {
  page: number
  results: any[]
  total_pages: number
  total_results: number
}

const mainApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<getPopularRequestType, void>({
      query: (Any) => `movie/popular`,
    }),
  }),
})

export const { useGetPopularQuery } = mainApi
