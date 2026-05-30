import { z } from 'zod'

export const movieInfoSchema = z.strictObject({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  //todo возможно вынести в одельную схему с .optional()
  genre_ids: z.array(z.number().int()).optional(),

  id: z.number().int(),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.iso.date(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number().int(),

  //warning этого поля в документации нет
  softcore: z.boolean().optional(),
})
