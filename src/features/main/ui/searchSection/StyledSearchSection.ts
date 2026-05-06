import { styled } from '@mui/material'

export const StyledSearchSection = styled('div')<{ backgroundUrl: string }>(({ backgroundUrl }) => ({
  backgroundImage: `
    linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0) 80%, 
      rgba(0, 0, 0, 1) 100%
    ), 
    url(${backgroundUrl})
  `,
  backgroundPosition: 'start',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '80%',
  paddingLeft: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}))
