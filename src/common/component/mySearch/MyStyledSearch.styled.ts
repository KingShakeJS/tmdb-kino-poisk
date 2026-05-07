import { styled } from '@mui/material'
import { alpha } from '@mui/material/styles'

export const MyStyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '50px',
  width: '100%',
  '.MuiTextField-root': {
    width: '100%',
    maxWidth: '300px',
    opacity: 0.5,
  },
  '.MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: '40px',
    '&.Mui-focused fieldset': {
      margin: '-7px',
    },
    '.MuiInputBase-input': {
      color: theme.palette.common.black,
    },
  },
  '.MuiButton-root': {
    borderRadius: '40px',
    '&.Mui-disabled': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}))
