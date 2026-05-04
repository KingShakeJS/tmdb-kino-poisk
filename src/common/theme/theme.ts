import { createTheme } from '@mui/material'

export type ThemeMode = 'dark' | 'light'

export const logoColors = {
  Primary: '#0d253f',
  Secondary: '#01b4e4',
  Tertiary: '#90cea1',
} as const

export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            minHeight: '100vh',
          },
          '#root': {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
        },
      },
    },
  })
}
