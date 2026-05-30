import type { ThemeMode } from '@/common/theme/theme.ts'
import { createAppSlice } from '@/common/utils/createAppSlice.ts'
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

//todo оазобраться с этой дрочкой ошибок

type statusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export const appSlice = createAppSlice({
  name: 'app',
  initialState: {
    themeMode: 'light' as ThemeMode,
    status: 'loading' as statusType,
    currentPage: 'Main' as string,
    error: null as any,
  },

  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectCurrentPage: (state) => state.currentPage,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
  },

  reducers: (create) => {
    return {
      setAppError: create.reducer<{ error: string | null }>((state, action) => {
        state.error = action.payload.error
      }),
      changeThemeMode: create.asyncThunk(
        ({ themeMode }, { rejectWithValue }) => {
          try {
            return { themeMode }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.themeMode = action.payload.themeMode

            localStorage.setItem('themeMode', action.payload.themeMode)
          },
        },
      ),

      ///////

      changeCurrentPage: create.asyncThunk(
        ({ currentPage }, { rejectWithValue }) => {
          try {
            return { currentPage }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.currentPage = action.payload.currentPage

            localStorage.setItem('currentPage', action.payload.currentPage)
          },
        },
      ),
      /////
    }
  },

  extraReducers: (builder) => {
    //todo на экране не показывает лайнер прогрес но в тузу тулкиьта видно
    builder
      .addMatcher(isPending, (state) => {
        state.status = 'loading'
      })
      .addMatcher(isFulfilled, (state) => {
        state.status = 'succeeded'
      })
      .addMatcher(isRejected, (state) => {
        state.status = 'failed'
      })
  },
})
export const appReducer = appSlice.reducer

export const { selectThemeMode, selectCurrentPage, selectStatus,selectError } = appSlice.selectors
export const { changeThemeMode, changeCurrentPage,setAppError } = appSlice.actions
