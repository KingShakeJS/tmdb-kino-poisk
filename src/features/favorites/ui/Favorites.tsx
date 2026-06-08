import { useAppSelector } from '@/common/hooks'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { selectFavoriteMovies } from '@/app/model/app-slice.ts'

export const Favorites = () => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies)

  return (
    <StyledContainer>
      <h2>Favorite Movies</h2>
      <AllMoviesBlock data={favoriteMovies} />
    </StyledContainer>
  )
}
