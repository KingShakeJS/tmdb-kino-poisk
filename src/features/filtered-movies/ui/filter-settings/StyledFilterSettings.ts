import { styled } from '@mui/material'

export const StyledFilterSettings = styled('div')(({ theme }) => ({
  paddingTop: '20px',
  width: '40%',
  '.supper-title': {
    paddingBottom: '40px',
    fontSize: '2em',
    margin: 0,
  },
  '.MuiFormControl-root': {
    display: 'flex',
    gap: '20px',
  },
  '.select': {
    display: 'flex',
    gap: '10px',
  },

  '.title-counter': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '.MuiPaper-root': {
    height: '100%',
    padding: '40px',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[700],
  },
  '.genres': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
}))
