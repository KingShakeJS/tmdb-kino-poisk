import { MySearch } from '@/common/component'
import { styled } from '@mui/material'
import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'

export const StyledSearchSectionSearchPage = styled('div')`
  .search {
    display: flex;
    flex-direction: column;
    width: 40%;
    h3 {
      font-size: 2em;
    }
  }
`

export const Search = () => {
  //todo заглушка
  const { data } = useGetPopularQuery()

  return (
    <StyledContainer>
      <StyledSearchSectionSearchPage>
        <div className="search">
          <h3>Search Results</h3>
          <MySearch />
          <p>Enter a movie title to start searching.</p>
        </div>
        <AllMoviesBlock data={data} />
      </StyledSearchSectionSearchPage>
    </StyledContainer>
  )
}
