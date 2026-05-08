import { styled } from '@mui/material'
import type { getPopularRequestType } from '@/features/main/api/mainApi.ts'

import { MovieCard } from '@/features/main/ui/moviesBlock/movieCard/MovieCard.tsx'

//todo
const StyledMoviesBlock = styled('div')({
  display: 'flex',
  gap: '10px',
})

type Props = {
  title: string
  data: getPopularRequestType | undefined
}

export const MoviesBlock = ({ title, data }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <StyledMoviesBlock>
        {data?.results.slice(0, 6).map((info) => (
          <MovieCard key={info.id} info={info} />
        ))}
      </StyledMoviesBlock>
    </div>
  )
}
