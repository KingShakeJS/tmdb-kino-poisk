import { baseApi } from '@/app/api/baseApi.ts'
import { type getBaseResponseType } from '@/common/types/types.ts'
import { zodValidate } from '@/common/utils/zodValidate.ts'
import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchMovie: build.query<getBaseResponseType, { query: string }>({
      query: (params) => ({
        url: 'search/movie',
        params,
      }),
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        zodValidate(dispatch, queryFulfilled, getBaseResponseSchema)
      },
    }),
  }),
})

export const { useGetSearchMovieQuery } = searchApi
