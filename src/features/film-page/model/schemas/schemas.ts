import { z } from 'zod'
import { movieInfoSchema } from '@/common/schemas/schemas.ts'

export const getDetailsSchema = movieInfoSchema.safeExtend({
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
  // release_date: z.union([z.iso.date(), '']),
  release_date: z.any(),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  revenue: z.number(),
  //todo??? z.object({})
  spoken_languages: z.array(z.object({})),
})

const basePersonSchema = z.strictObject({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number().int().nonnegative(),
  known_for_department: z.string().min(1),
  name: z.string().min(1),
  original_name: z.string().min(1),
  popularity: z.number().nonnegative(),
  profile_path: z.string().min(1).nullable(),
  credit_id: z.string().min(1),
})
const castSchema = basePersonSchema.safeExtend({
  cast_id: z.number().int().nonnegative(),
  character: z.string(),
  order: z.number().int(),
})
const crewSchema = basePersonSchema.safeExtend({
  department: z.string(),
  job: z.string(),
})
export const getCreditsSchema = z.strictObject({
  id: z.number().int(),
  cast: z.array(castSchema),
  crew: z.array(crewSchema),
})
