import { getResponseWithDateSchema } from '@/features/main/model/schemas/schemas.ts'
import { z } from 'zod'
import { type movieInfoSchema } from '@/common/schemas/schemas.ts'

export type getResponseWithDateType = z.infer<typeof getResponseWithDateSchema>

export type movieInfo = z.infer<typeof movieInfoSchema>
