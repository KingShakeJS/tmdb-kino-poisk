import {
  type getPopularResponseSchema,
  movieInfoSchema,
} from '@/features/main/model/schemas/schemas.ts'
import { z } from 'zod'

export type getPopularResponsetType = z.infer<typeof getPopularResponseSchema>

export type movieInfo = z.infer<typeof movieInfoSchema>
