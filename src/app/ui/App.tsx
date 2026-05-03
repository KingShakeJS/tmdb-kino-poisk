import { Button, Paper, ThemeProvider } from '@mui/material'
import { getTheme } from '@/common/theme/theme.ts'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeThemeMode, selectThemeMode } from '@/app/model/app-slice.ts'

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
      <>
        <Paper>Hello word</Paper>
        <Button  onClick={changeThemeModeHandler}>Изменить тему</Button>
      </>
    </ThemeProvider>
  )
}

export default App
