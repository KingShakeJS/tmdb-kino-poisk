import { CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeThemeMode, selectThemeMode, selectStatus } from '@/app/model/app-slice.ts'
import { Content, Header } from '@/common/component'
import { useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { MovieCardSkeleton } from '@/features/main/ui/moviesBlock/movieCard/MovieCardSkeleton.tsx'
function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const loadingStatus = useAppSelector(selectStatus)

  const theme = getTheme(themeMode)

  const changeThemeModeHandler = () => {
    if (themeMode === 'dark') {
      dispatch(changeThemeMode({ themeMode: 'light' }))
    } else if (themeMode === 'light') {
      dispatch(changeThemeMode({ themeMode: 'dark' }))
    }
  }
  useEffect(() => {
    const candidate = localStorage.getItem('themeMode')
    if (candidate === 'light' || candidate === 'dark') {
      dispatch(changeThemeMode({ themeMode: candidate }))
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeTheme={changeThemeModeHandler} />
      {loadingStatus === 'loading' && <LinearProgress aria-label="Loading…" />}
      <Content />
      {/*<Footer /> // todo решить проблему его местоположения*/}
    </ThemeProvider>
  )
}

export default App
