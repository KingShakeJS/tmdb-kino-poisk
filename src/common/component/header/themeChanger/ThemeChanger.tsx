import { useState } from 'react'
import { Brightness7, Brightness2 } from '@mui/icons-material'

type Props = {
  changeTheme: () => void
}
export const ThemeChanger = ({ changeTheme }: Props) => {
  const [checked, setChecked] = useState(false)
  const changeThemeHandler = () => {
    setChecked((prev) => !prev)
    changeTheme()
  }

  return (
    <span style={{ cursor: 'pointer', fontSize: 32, transition: 'color 0.2s' }} onClick={changeThemeHandler}>
      {checked ? <Brightness7 /> : <Brightness2 htmlColor="#333" />}
    </span>
  )
}
