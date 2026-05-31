import { z } from 'zod'
import {
  getCreditsSchema,
  type getDetailsSchema,
} from '@/features/film-page/model/schemas/schemas.ts'

export type baseRequestType = { movie_id: string }

export type movieDetailsType = z.infer<typeof getDetailsSchema>

export type getCreditsType = z.infer<typeof getCreditsSchema>
