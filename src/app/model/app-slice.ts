import { createSlice } from '@reduxjs/toolkit'
import type { ThemeMode } from '@/common/theme/theme.ts'

export const appSlice = createSlice({
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
  }),
})

export const { selectThemeMode } = appSlice.selectors
export const { changeThemeMode } = appSlice.actions
export const appReducer = appSlice.reducer
