import { z } from 'zod'
import { getGenresMovieListSchema } from '@/features/filtered-movies/model/schemas/schemas.ts'

export const getGenresMovieListType = z.infer<typeof getGenresMovieListSchema>
