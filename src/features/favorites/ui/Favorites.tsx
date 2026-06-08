import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { getFavoriteMovies, selectFavoriteMovies } from '@/app/model/app-slice.ts'
import { useEffect } from 'react'

export const Favorites = () => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFavoriteMovies())
  }, [])

  return (
    <StyledContainer>
      <h2>Favorite Movies</h2>
      <AllMoviesBlock data={favoriteMovies} />
    </StyledContainer>
  )
}
