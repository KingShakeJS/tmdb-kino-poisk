import { styled } from '@mui/material'

export const StyledHeaderMenu = styled('div')(({ theme }) => ({
  height: '100%',
  maxWidth: '70%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '50px',
  fontWeight: 'bolder',
  fontSize: '1.2em',

  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  '.active': {
    border: '2px solid ' + theme.palette.text.primary,
    padding: '5px',
    borderRadius: '5px',
  },
}))
