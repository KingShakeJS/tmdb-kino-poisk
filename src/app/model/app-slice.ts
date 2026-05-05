import type { ThemeMode } from '@/common/theme/theme.ts'

import { createAppSlice } from '@/common/utils/createAppSlice.ts'

export const appSlice = createAppSlice({
  name: 'app',

  initialState: {
    themeMode: 'light' as ThemeMode,
    status: 'idle' as string,
    error: null as string | null,
    isLoggedIn: false,
  },

  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },

  reducers: (create) => ({
    changeThemeMode: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
    }),
    change: create.asyncThunk<{ themeMode: ThemeMode }>(
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
  }),
})

export const { selectThemeMode } = appSlice.selectors
export const { changeThemeMode, change } = appSlice.actions
export const appReducer = appSlice.reducer
