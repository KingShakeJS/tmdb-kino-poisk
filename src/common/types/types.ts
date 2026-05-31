import { getBaseResponseSchema } from '@/common/schemas/schemas.ts'
import { z } from 'zod'

export type getBaseResponseType = z.infer<typeof getBaseResponseSchema>
