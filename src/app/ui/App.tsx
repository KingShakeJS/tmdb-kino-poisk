import { CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { change, selectThemeMode } from '@/app/model/app-slice.ts'
import { Content, Footer, Header } from '@/common/component'
import { useEffect } from 'react'

function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  const changeThemeModeHandler = () => {
    if (themeMode === 'dark') {
      dispatch(change({ themeMode: 'light' }))
    } else if (themeMode === 'light') {
      dispatch(change({ themeMode: 'dark' }))
    }
  }
  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode')
    if (currentThemeMode) dispatch(change({ themeMode: currentThemeMode }))
  }, [])

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
