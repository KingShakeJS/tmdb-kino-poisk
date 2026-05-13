import { AppBar, Link, Toolbar } from '@mui/material'
import { ThemeChanger } from '@/common/component/header/themeChanger/ThemeChanger.tsx'
import logo from '/logo.svg?url'
import { HeaderMenu } from '@/common/component/header/headerMenu/HeaderMenu.tsx'
import { Link as RouterLink } from 'react-router'
import { Path } from '@/common/routing'
import { useAppDispatch } from '@/common/hooks'
import { changeCurrentPage } from '@/app/model/app-slice.ts'

type Props = {
  changeTheme: () => void
}
export const Header = ({ changeTheme }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Link component={RouterLink} to={Path.Main}>
          <img
            onClick={() => {
              dispatch(changeCurrentPage({ currentPage: 'Main' }))
            }}
            src={logo}
            alt="Logo"
            style={{ height: 40, marginRight: 16 }}
          />
        </Link>

        <HeaderMenu />

        <ThemeChanger changeTheme={changeTheme} />
      </Toolbar>
    </AppBar>
  )
}
