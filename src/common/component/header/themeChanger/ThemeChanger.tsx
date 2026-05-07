import { Brightness7, Brightness2 } from '@mui/icons-material'
import { useAppSelector } from '@/common/hooks'
import { selectThemeMode } from '@/app/model/app-slice.ts'

type Props = {
  changeTheme: () => void
}
export const ThemeChanger = ({ changeTheme }: Props) => {
  // const [checked, setChecked] = useState(false)
  const themeMode = useAppSelector(selectThemeMode)
  const changeThemeHandler = () => {
    changeTheme()
  }

  return (
    <span
      style={{ cursor: 'pointer', fontSize: 32, transition: 'color 0.2s' }}
      onClick={changeThemeHandler}
    >
      {themeMode === 'dark' ? <Brightness7 /> : <Brightness2 />}
    </span>
  )
}
