import { Box, CircularProgress } from '@mui/material'

export const BigLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', // чтобы было посередине окна, а не родителя
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1300, // над остальными элементами, как Modal
        background: 'rgba(255,255,255,0.5)', // полупрозрачная пелена, если хотите
      }}
    >
      <CircularProgress size={80} aria-label="Loading…" />
    </Box>
  )
}
