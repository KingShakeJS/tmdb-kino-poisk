import { CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  changeThemeMode,
  selectThemeMode,
  selectStatus,
  changeCurrentPage,
} from '@/app/model/app-slice.ts'
import { Content, Header } from '@/common/component'
import { useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
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
    const themeMode = localStorage.getItem('themeMode')
    // const page = localStorage.getItem('currentPage')
    if (themeMode === 'light' || themeMode === 'dark') {
      dispatch(changeThemeMode({ themeMode }))
    }
    // if (page){
    //   dispatch(changeCurrentPage({ currentPage: page }))
    // }
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
