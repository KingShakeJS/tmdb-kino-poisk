import { createTheme } from '@mui/material'

export type ThemeMode = 'dark' | 'light'
export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          padding: 0,
          margin: 0,
        },
      },
    },
  })
}
