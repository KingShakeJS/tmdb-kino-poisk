import type { MouseEvent } from 'react'
import { Button, CardContent, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import FavoriteIcon from '@mui/icons-material/Favorite'

import Zaglusha from '/forFilmCard.png'

import { BASE_IMG_URL } from '@/common/constants/const.ts'
import { Path } from '@/common/routing'
import { Rating } from '@/common/component'
import { useAppDispatch } from '@/common/hooks'

import { StyledMovieCard } from '@/common/component/movieCard/StyledMovieCard.styled.ts'
import type { movieInfo } from '@/features/main/model/types/types.ts'
import { changeMovieToFavorites } from '@/app/model/app-slice.ts'

type Props = {
  info: movieInfo
  isFavorite: boolean
}

export const MovieCard = ({ info, isFavorite }: Props) => {
  const dispatch = useAppDispatch()

  const changeFavoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(changeMovieToFavorites({ movie: info }))
  }

  const src = info.poster_path ? `${BASE_IMG_URL}${info.poster_path}` : Zaglusha

  return (
    <StyledMovieCard isFavorite={isFavorite}>
      <Link
        component={RouterLink}
        to={Path.Movie.replace(':id', String(info.id))}
        sx={{
          height: '100%',
          width: '100%',
          color: 'currentColor',
          textDecoration: 'none',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="img-btn-rating">
            <Button onClick={changeFavoriteHandler}>
              <FavoriteIcon htmlColor={isFavorite ? 'red' : 'blue'} />
            </Button>

            <img
              className="movie-img"
              style={{
                maxWidth: '150px',
                borderRadius: '20px',
              }}
              src={src}
              alt={info.title}
            />

            <Rating count={info.vote_average} />
          </div>

          <h3 style={{ marginRight: 'auto' }}>{info.title}</h3>
        </CardContent>
      </Link>
    </StyledMovieCard>
  )
}
