import { Card, CardContent, Link, styled } from '@mui/material'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import type { movieInfo } from '@/features/main/api/mainApi.ts'
import { Path } from '@/common/routing'
import { Link as RouterLink } from 'react-router'
//todo доделать дизайн карточки
const StyledMovieCard = styled(Card)`
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
type Props = {
  info: movieInfo | undefined
}
export const MovieCard = ({ info }: Props) => {
  return (
    <StyledMovieCard>
      <Link
        component={RouterLink}
        to={`${Path.Movies}/${info?.id}`}
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
            style={{ maxWidth: '150px', borderRadius: '20px' }}
            src={`${BASE_IMG_URL}${info?.poster_path}`}
            alt="alt"
          />
          <h3 style={{ marginRight: 'auto' }}>{info?.title}</h3>
          <p>{Math.round((info?.vote_average as number) * 10) / 10}</p>
        </CardContent>
      </Link>
    </StyledMovieCard>
  )
}
