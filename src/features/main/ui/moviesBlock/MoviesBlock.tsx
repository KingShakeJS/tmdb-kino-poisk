import { Button, styled } from '@mui/material'
import type { getPopularRequestType } from '@/features/main/api/mainApi.ts'

import { MovieCard } from '@/features/main/ui/moviesBlock/movieCard/MovieCard.tsx'
import { Link } from 'react-router'

//todo сделать скелетоны

const StyledMoviesBlock = styled('div')({
  display: 'flex',
  gap: '10px',
})

type Props = {
  title: string
  data: getPopularRequestType | undefined
}

export const ViewMoreBtn = () => {
  return (
    <Link to={'/1'}>
      <Button variant="outlined">View more</Button>
    </Link>
  )
}
export const MoviesBlock = ({ title, data }: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{title}</h2>
        <ViewMoreBtn />
      </div>
      <StyledMoviesBlock>
        {data?.results.slice(0, 6).map((info) => (
          <MovieCard key={info.id} info={info} />
        ))}
      </StyledMoviesBlock>
    </div>
  )
}
