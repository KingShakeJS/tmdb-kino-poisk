import { AppBar, Box, Toolbar } from '@mui/material'
import { ThemeChanger } from '@/common/component/header/themeChanger/ThemeChanger.tsx'
import logo from '../../../../public/logo.svg'
import { HeaderMenu } from '@/common/component/header/headerMenu/HeaderMenu.tsx'

type Props = {
  changeTheme: () => void
}
export const Header = ({ changeTheme }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />

          <HeaderMenu />

          <ThemeChanger changeTheme={changeTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
