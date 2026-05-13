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
    getCredits: build.query<any, { movie_id: string }>({
      query: ({ movie_id }) => `movie/${movie_id}/credits`,
    }),
  }),
})

export const { useGetDetailsQuery, useGetSimilarQuery, useGetCreditsQuery } = movieApi
