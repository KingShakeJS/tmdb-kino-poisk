import { z } from 'zod'
import { getGenresMovieListSchema } from '@/features/filtered-movies/model/schemas/schemas.ts'

export type getGenresMovieListType = z.infer<typeof getGenresMovieListSchema>

export type getDiscoverMovieParamsType = {
  sort_by: string
  'vote_average.gte': number
  'vote_average.lte': number
  with_genres: string
  page: number
}
