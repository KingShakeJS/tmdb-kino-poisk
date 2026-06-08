import { MySearch } from '@/common/component'
import { styled } from '@mui/material'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { useGetSearchMovieQuery } from '@/features/search/api/seachApi.ts'
import { useAppSelector } from '@/common/hooks'
import { selectSearchMovieByTitle } from '@/app/model/app-slice.ts'
import { useEffect, useState } from 'react'

export const StyledSearchSectionSearchPage = styled('div')`
  .search {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      font-size: 2em;
    }
  }
`

export const Search = () => {

  const searchText = useAppSelector(selectSearchMovieByTitle)
  const [skip, setSkip] = useState(true)
  const { data } = useGetSearchMovieQuery({ query: searchText }, { skip })
  useEffect(() => {
    searchText && setSkip(false)
  }, [])
  return (
    <StyledContainer>
      <StyledSearchSectionSearchPage>
        <div className="search">
          <h3>Search Results</h3>
          <MySearch onClick={() => setSkip(false)} />

          {data ? (
            <>
              <p>Results for "{searchText}"</p>
              <AllMoviesBlock data={data} />
            </>
          ) : (
            <p>Enter a movie title to start searching.</p>
          )}
        </div>
      </StyledSearchSectionSearchPage>
    </StyledContainer>
  )
}
