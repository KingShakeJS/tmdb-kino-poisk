import { CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeThemeMode, selectThemeMode } from '@/app/model/app-slice.ts'
import { Content, Footer, Header } from '@/common/component'

function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  const changeThemeModeHandler = () => {
    if (themeMode === 'dark') {
      dispatch(changeThemeMode({ themeMode: 'light' }))
    } else if (themeMode === 'light') {
      dispatch(changeThemeMode({ themeMode: 'dark' }))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeTheme={changeThemeModeHandler} />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}

export default App
