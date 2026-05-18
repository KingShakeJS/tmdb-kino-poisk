//todo сверстать эту страницу

import {
  FilterSettings,
  type paramsType,
} from '@/features/filtered-movies/ui/filter-settings/FilterSettings.tsx'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'
import { useState } from 'react'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'

export const FilteredMovies = () => {
  //todo useGetPopularQuery это заглушка
  const [params, setParams] = useState<paramsType>({
    sortBy: 'Popularity ↓',
    rating: [0, 10],
    checkedGenres: [],
  })
  const { data } = useGetPopularQuery()
  //https://developer.themoviedb.org/reference/genre-movie-list   жанры
  // https://developer.themoviedb.org/reference/discover-movie запрос за фильмами
  return (
    <StyledContainer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
      }}
    >
      <FilterSettings params={params} changeParams={setParams} />
      <AllMoviesBlock data={data} />
    </StyledContainer>
  )
}
