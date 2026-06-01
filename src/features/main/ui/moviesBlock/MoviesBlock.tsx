import { Button, styled } from '@mui/material'
import type { getPopularRequestType } from '@/features/main/api/mainApi.ts'

import { Link } from 'react-router'
import { MovieCardSkeleton } from '@/common/component/movieCard/MovieCardSkeleton.tsx'
import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'
import { Path } from '@/common/routing'
import { useAppDispatch } from '@/common/hooks'
import { changeCurrentPage } from '@/app/model/app-slice.ts'

//todo??? то что в StyledMoviesBlock вынести в отдельный компонент, делать запросы в нем
const StyledMoviesBlock = styled('div')({
  display: 'flex',
  gap: '10px',
})

type Props = {
  title: string
  data: getPopularRequestType | undefined
  isLoading: boolean
  category: string
}

export const ViewMoreBtn = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch()
  const goToCategories = () => {
    dispatch(changeCurrentPage({ currentPage: 'CategoryMovies' }))
  }
  return (
    <Link to={`${Path.CategoryMovies}/${category}`}>
      <Button variant="outlined" onClick={goToCategories}>
        View more
      </Button>
    </Link>
  )
}
export const MoviesBlock = ({ title, data, isLoading, category }: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{title}</h2>
        <ViewMoreBtn category={category} />
      </div>
      <StyledMoviesBlock>
        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, i) => <MovieCardSkeleton key={i} />)
          : data?.results.slice(0, 6).map((info) => <MovieCard key={info.id} info={info} />)}
      </StyledMoviesBlock>
    </div>
  )
}
