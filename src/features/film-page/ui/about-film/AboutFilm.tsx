import { Rating } from '@/common/component'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import { Button, styled } from '@mui/material'
import Zaglusha from '/forFilmCard.png'
import { useNavigate } from 'react-router'

//todo data: any

type Props = {
  data: any | undefined
}

const StyledAboutFilm = styled('div')`
  display: flex;
  gap: 50px;

  .poster {
    width: 20%;
    border-radius: 10px;
  }
`

export const AboutFilm = ({ data }: Props) => {
  const navigate = useNavigate()

  const returnHourMinutes = (time: number) => {
    const h = Math.floor(time / 60)
    const m = time % 60
    return `${h}h ${m}m`
  }

  const src = data?.poster_path ? `${BASE_IMG_URL}${data?.poster_path}` : Zaglusha

  return (
    data && (
      <StyledAboutFilm className={'aboutFilm'}>
        <img className={'poster'} src={src} alt="" />
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>{data?.title}</h2>
            <Button variant="outlined" sx={{ height: '50px' }} onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <p>Release year: {new Date(data?.release_date).getFullYear()}</p>
            <Rating count={data?.vote_average} />
            <p>Runtime: {returnHourMinutes(data?.runtime)}</p>
          </div>

          <p>{data.overview}</p>
          <h4>Genres</h4>
          <div style={{ display: 'flex', gap: '20px' }}>
            {data?.genres.map((genre: any) => (
              <Button key={genre.id} variant="outlined" component={'div'}>
                {genre.name}
              </Button>
            ))}
          </div>
        </div>
      </StyledAboutFilm>
    )
  )
}
