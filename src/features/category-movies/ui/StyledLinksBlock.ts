import { styled } from '@mui/material'

export const StyledLinksBlock = styled('div')(({ theme }) => ({
  width: '50%',
  paddingTop: 20,
  display: 'flex',
  gap: 20,
  justifyContent: 'space-between',
  margin: '0 auto',

  '.MuiLink-root': {
    color: 'currentColor',
    textDecoration: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '8px 16px',
    borderRadius: 4,
    transition: 'background 0.2s',

    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  '.MuiLink-root.active': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))
