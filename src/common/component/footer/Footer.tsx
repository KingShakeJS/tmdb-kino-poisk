import { AppBar, Toolbar, useTheme } from '@mui/material'
import { logoColors } from '@/common/theme/theme.ts'

export const Footer = () => {
  const theme = useTheme()

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor:
            theme.palette.mode === 'light' ? logoColors.Tertiary : logoColors.Primary,
        }}
      >
        какоето содержание моего футера)))
      </Toolbar>
    </AppBar>
  )
}
