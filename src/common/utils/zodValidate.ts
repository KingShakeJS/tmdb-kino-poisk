import type { Dispatch } from '@reduxjs/toolkit'
import { setAppError } from '@/app/model/app-slice.ts'

export const zodValidate = async (dispatch: Dispatch, queryFulfilled: any, schema: any) => {
  try {
    const { data } = await queryFulfilled
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      console.log(parsed.error)

      dispatch(setAppError({ error: 'ZOD ERROR смотри в консоль' }))
    } else {
      dispatch(setAppError({ error: null }))
    }
  } catch (err) {
    return
  }
}
