import { z } from 'zod'
import { movieInfoSchema } from '@/common/schemas/schemas.ts'

export const getBaseResponseSchema = z.strictObject({
  page: z.number().int().nonnegative(),
  results: z.array(movieInfoSchema),
  total_pages: z.number().int().nonnegative(),
  total_results: z.number().int().nonnegative(),
})

export const getResponseWithDateSchema = getBaseResponseSchema.safeExtend({
  dates: z
    .strictObject({
      maximum: z.iso.date(),
      minimum: z.iso.date(),
    })
    .refine(
      (dates) => {
        const min = Date.parse(dates.minimum)
        const max = Date.parse(dates.maximum)
        return !isNaN(min) && !isNaN(max) && max >= min
      },
      {
        message: 'maximum должен быть >= minimum',
        path: ['dates', 'maximum'],
      },
    ),
})
