import { z } from 'zod'
import type { movieDetailsSchema } from '@/features/film-page/model/schemas/schemas.ts'

export type baseRequestType = { movie_id: string }

export type movieDetailsType = z.infer<typeof movieDetailsSchema>
