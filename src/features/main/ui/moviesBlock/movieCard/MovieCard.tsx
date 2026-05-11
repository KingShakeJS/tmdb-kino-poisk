import type { MouseEvent } from 'react'
import { Button, CardContent, Link } from '@mui/material'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import type { movieInfo } from '@/features/main/api/mainApi.ts'
import { Path } from '@/common/routing'
import { Link as RouterLink } from 'react-router'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledMovieCard } from '@/features/main/ui/moviesBlock/movieCard/StyledMovieCard.styled.ts'
//todo любимые должны бвыть подсвеченны сразву

type Props = {
  info: movieInfo | undefined
}
export const MovieCard = ({ info }: Props) => {
  const changeFavoriteHandler = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault()
    e.stopPropagation()

    console.log('click on favorite movie', id)
    // todo Здесь разместите обработку "лайка"
  }
  return (
    <StyledMovieCard rating={info!.vote_average}>
      <Link
        component={RouterLink}
        to={`${Path.Movie.replace(':id', info?.id)}`}
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
          <img
            className="movie-img"
            style={{ maxWidth: '150px', borderRadius: '20px' }}
            src={`${BASE_IMG_URL}${info?.poster_path}`}
            alt="alt"
          />
          <h3 style={{ marginRight: 'auto' }}>{info?.title}</h3>
          <p className={'rating'}> {Math.round((info?.vote_average as number) * 10) / 10}</p>
          <Button
            onClick={(e) => {
              changeFavoriteHandler(e, info!.id)
            }}
          >
            <FavoriteIcon />
          </Button>
        </CardContent>
      </Link>
    </StyledMovieCard>
  )
}
