import { CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  changeThemeMode,
  selectThemeMode,
  selectStatus,
  selectError,
  changeCurrentPage,
  setAppError,
} from '@/app/model/app-slice.ts'
import { Content, Header } from '@/common/component'
import { useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

//todo сохранять url в localstorage???
function App() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const loadingStatus = useAppSelector(selectStatus)
  const error = useAppSelector(selectError)

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

  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    // setOpen(false)
    dispatch(setAppError({ error: null }))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header changeTheme={changeThemeModeHandler} />
      {loadingStatus === 'loading' && <LinearProgress aria-label="Loading…" />}
      <Content />

      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      {/*<Footer /> // todo решить проблему его местоположения*/}
    </ThemeProvider>
  )
}

export default App
