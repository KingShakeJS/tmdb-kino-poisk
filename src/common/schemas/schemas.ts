import { z } from 'zod'

export const movieInfoSchema = z.strictObject({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  //todo??? возможно вынести в одельную схему с .optional()
  genre_ids: z.array(z.number().int()).optional(),

  id: z.number().int(),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.union([z.iso.date(), z.literal([''])]),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number().int(),

  //warning этого поля в документации нет
  softcore: z.boolean().optional(),
})

export const getBaseResponseSchema = z.strictObject({
  page: z.number().int().nonnegative(),
  results: z.array(movieInfoSchema),
  total_pages: z.number().int().nonnegative(),
  total_results: z.number().int().nonnegative(),
})
