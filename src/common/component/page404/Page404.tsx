import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { Path } from '@/common/routing'

export const Page404 = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate(Path.Main)
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 2,
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Страница не найдена
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
        Извините, мы не можем найти запрашиваемую страницу.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Вернуться на главную
      </Button>
    </Box>
  )
}
