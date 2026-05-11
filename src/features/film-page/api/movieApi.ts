import { baseApi } from '@/app/api/baseApi.ts'
//todo типизация и zod
const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDetails: build.query<any, { movie_id: string }>({
      query: ({ movie_id }) => `/movie/${movie_id}`,
    }),
    getSimilar: build.query<any, { movie_id: string }>({
      query: ({ movie_id }) => `/movie/${movie_id}/similar`,
    }),
  }),
})

export const { useGetDetailsQuery, useGetSimilarQuery } = movieApi
