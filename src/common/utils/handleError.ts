import { isErrorWithMessage } from './isErrorWithMessage'
import type {
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from '@reduxjs/toolkit/query'
import { ResultCode } from '@/common/enums/enum.ts'
import { setAppError } from '@/app/model/app-slice.ts'

export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let error = 'Some error occurred'

  if (result.error) {
    // const data = result.error.data

    console.log(result.error)
    switch (result.error.status) {
      case 'FETCH_ERROR':
        debugger
        error = 'сломался интерет'
        break
      case 401:
        error = 'невалидный API_KEY'
        break
      case 404:
        error = 'плохой эндпоинт'
        break

      case 400:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.message
        } else {
          // если data содержит что-то читаемое — пробуем строкифицировать

          error =
            typeof result.error.data === 'string'
              ? result.error.data
              : JSON.stringify(result.error.data)
        }
        break
      default:
        // @ts-ignore todo???
        if (
          typeof result.error.status === 'number' &&
          result.error.status >= 500 &&
          result.error.status < 600
        ) {
          error = 'Server error occurred. Please try again later.'
        } else {
          error = JSON.stringify(result.error)
        }
        break
    }

    api.dispatch(setAppError({ error }))
  }

  // 3) Логика по resultCode из данных ответа
  if ((result.data as { resultCode?: any })?.resultCode === ResultCode.Error) {
    const messages = (result.data as { messages?: string[] })?.messages ?? []
    error = messages.length ? messages[0] : error
    api.dispatch(setAppError({ error }))
  }
}
