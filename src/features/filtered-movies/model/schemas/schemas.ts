import { z } from 'zod'

export const getGenresMovieListSchema = z.strictObject({
  genres: z.array(
    z.strictObject({
      id: z.number().int(),
      name: z.string(),
    }),
  ),
})
