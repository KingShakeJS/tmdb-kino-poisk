import type { MouseEvent } from 'react'
import { Button, CardContent, Link } from '@mui/material'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import { Path } from '@/common/routing'
import { Link as RouterLink } from 'react-router'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Zaglusha from '/forFilmCard.png'
import { Rating } from '@/common/component'
import { StyledMovieCard } from '@/common/component/movieCard/StyledMovieCard.styled.ts'
import type { movieInfo } from '@/features/main/model/types/types.ts'
import { changeMovieToFavorites, selectFavoriteMovies } from '@/app/model/app-slice.ts'

import { useAppDispatch } from '@/common/hooks'

type Props = {
  info: movieInfo | undefined
  isFavorite: boolean
}
export const MovieCard = ({ info, isFavorite }: Props) => {
  const dispatch = useAppDispatch()
  // const favoriteMovies = useAppSelector(selectFavoriteMovies)

  const changeFavoriteHandler = (e: MouseEvent<HTMLButtonElement>, info: movieInfo) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(changeMovieToFavorites({ movie: info }))
  }

  const src = info?.poster_path ? `${BASE_IMG_URL}${info?.poster_path}` : Zaglusha

  return (
    <StyledMovieCard isFavorite={isFavorite}>
      <Link
        component={RouterLink}
        to={`${Path.Movie.replace(':id', String(info!.id))}`}
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
          <div className={'img-btn-rating'}>
            <Button
              onClick={(e) => {
                changeFavoriteHandler(e, info)
              }}
            >
              <FavoriteIcon htmlColor={isFavorite ? 'red' : 'blue'} />
            </Button>
            <img
              className="movie-img"
              style={{ maxWidth: '150px', borderRadius: '20px' }}
              src={src}
              alt="alt"
            />
            <Rating count={info!.vote_average as number} />
          </div>

          <h3 style={{ marginRight: 'auto' }}>{info?.title}</h3>
        </CardContent>
      </Link>
    </StyledMovieCard>
  )
}
