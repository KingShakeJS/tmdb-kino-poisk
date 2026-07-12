import { Button, styled } from '@mui/material'

import { Link } from 'react-router'
import { MovieCardSkeleton } from '@/common/component/movieCard/MovieCardSkeleton.tsx'
import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'
import { Path } from '@/common/routing'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeCurrentPage, selectFavoriteMovies } from '@/app/model/app-slice.ts'
import type { getBaseResponseType } from '@/common/types/types.ts'

//todo??? то что в StyledMoviesBlock вынести в отдельный компонент, делать запросы в нем
const StyledMoviesBlock = styled('div')({
  display: 'flex',
  gap: '10px',
})

type Props = {
  title: string
  data: getBaseResponseType | undefined
  isLoading: boolean
  category: string
}

export const ViewMoreBtn = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch()

  const goToCategories = () => {
    dispatch(changeCurrentPage({ currentPage: category }))
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
  const favoriteMovies = useAppSelector(selectFavoriteMovies)

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
          : data?.results
              .slice(0, 6)
              .map((info: any) => (
                <MovieCard
                  isFavorite={!!favoriteMovies.results.find((item: any) => item.id === info.id)}
                  key={info.id}
                  info={info}
                />
              ))}
      </StyledMoviesBlock>
    </div>
  )
}
