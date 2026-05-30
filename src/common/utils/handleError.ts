import { ZodError } from 'zod'
import { isErrorWithMessage } from './isErrorWithMessage'
import type {
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from '@reduxjs/toolkit/query'
import { ResultCode } from '@/common/enums/enum.ts'
import { setAppError } from '@/app/model/app-slice.ts'

const formatZodError = (z: unknown): string => {
  const issues = Array.isArray((z as any)?.issues) ? (z as any).issues : ((z as any)?.errors ?? [])
  const messages = (issues as any[])
    .map((issue) => {
      if (!issue) return ''
      if (typeof issue === 'string') return issue
      if (typeof issue === 'object') {
        // Zod issue обычно { message, path, ... }
        if ('message' in issue) {
          const path = Array.isArray((issue as any).path)
            ? (issue as any).path.join('.')
            : undefined
          return path ? `${path}: ${(issue as any).message}` : String((issue as any).message)
        }
        return JSON.stringify(issue)
      }
      return String(issue)
    })
    .filter(Boolean)
  return messages.length ? messages.join('; ') : 'Validation error'
}

export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let error = 'Some error occurred'

  // 1) Если в error.data — ZodError (реальный или сериализованный)
  if (result.error) {
    const data = result.error.data
    if (data instanceof ZodError || (data && Array.isArray((data as any).issues))) {


      error = formatZodError(data)
      api.dispatch(setAppError({ error }))
      return
    }

    switch (result.error.status) {
      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'CUSTOM_ERROR':
        error = String(result.error.error)
        break
      case 404:
        error = '404'
        break
      case 403:
        error = '403 Forbidden Error. Check API-KEY'
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
        // @ts-ignore todo
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

  // 2) Если result.data — сериализованный ZodError (на всякий случай)
  if (
    result.data instanceof ZodError ||
    (result.data && Array.isArray((result.data as any).issues))
  ) {
    error = formatZodError(result.data)
    api.dispatch(setAppError({ error }))
    return
  }

  // 3) Логика по resultCode из данных ответа
  if ((result.data as { resultCode?: any })?.resultCode === ResultCode.Error) {
    const messages = (result.data as { messages?: string[] })?.messages ?? []
    error = messages.length ? messages[0] : error
    api.dispatch(setAppError({ error }))
  }
}
