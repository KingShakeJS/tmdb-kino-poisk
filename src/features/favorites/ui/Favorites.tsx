import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'

export const Favorites = () => {
  //todo заглушка
  const { data } = useGetPopularQuery()

  return (
    <StyledContainer>
      <h2>Favorite Movies</h2>
      <AllMoviesBlock data={data} />
    </StyledContainer>
  )
}
