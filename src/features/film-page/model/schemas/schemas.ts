import { z } from 'zod'
import { movieInfoSchema } from '@/common/schemas/schemas.ts'

export const movieDetailsSchema = movieInfoSchema.safeExtend({
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z.any().nullable(),
  budget: z.number(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  homepage: z.string(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  runtime: z.number(),
  softcore: z.boolean(),
  production_companies: z.array(
    z.object({
      id: z.number(),
      logo_path: z.string().nullable(),
      name: z.string(),
      origin_country: z.string(),
    }),
  ),
  production_countries: z.array(
    z.object({
      iso_3166_1: z.string(),
      name: z.string(),
    }),
  ),
  release_date: z.iso.date(),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  revenue: z.number(),
  //todo z.object({})
  spoken_languages: z.array(z.object({})),
})
