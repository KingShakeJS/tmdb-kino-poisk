import { styled } from '@mui/material'

export const StyledSearchSection = styled('div')<{ backgroundUrl: string }>(
  ({ backgroundUrl }) => ({
    backgroundImage: `
    linear-gradient(
      to bottom, 
      rgba(0, 0, 0, .3) 80%, 
      rgba(0, 0, 0, 1) 100%
    ), 
    url(${backgroundUrl})
  `,
    backgroundPosition: 'start',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    maxHeight: '600px',
    paddingLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  }),
)
