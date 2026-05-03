import { createTheme } from '@mui/material'

export type ThemeMode = 'dark' | 'light'
export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
    },
  })
}
