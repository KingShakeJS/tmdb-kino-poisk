import { Card, styled } from '@mui/material'
import type { CardProps } from '@mui/material'

type StyledMovieCardProps = CardProps & {
  isFavorite?: boolean
}
// Обратите внимание, что нужно указывать `shouldForwardProp`, чтобы пропс не передавался в DOM
export const StyledMovieCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isFavorite',
})<StyledMovieCardProps>(({ theme, isFavorite }) => ({
  flex: 1,
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  background: theme.palette.background.paper,

  '& .img-btn-rating': {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  '& .rating': {
    position: 'absolute',
    bottom: '-10%',
    right: 0,
  },

  '.movie-img': {
    transition: 'transform 0.3s',
    display: 'block',
    margin: '0 auto',
    maxWidth: 150,
    borderRadius: 20,
  },

  '&:hover .movie-img': {
    transform: 'scale(1.1)',
  },

  '& .MuiButton-root': {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[300],
    // right: 20,
    // top: 10,
    width: 60,
    height: 60,
    opacity: isFavorite ? 1 : 0, // Всегда показывать, если favorite
    pointerEvents: isFavorite ? 'auto' : 'none', // Иначе отключено
    transition: 'opacity 0.5s',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },

  // Для не в избранном, показывать кнопку только при ховере
  ...(isFavorite
    ? {}
    : {
        '&:hover .MuiButton-root': {
          opacity: 1,
          pointerEvents: 'auto',
        },
      }),
}))
