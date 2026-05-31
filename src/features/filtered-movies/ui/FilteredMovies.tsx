import {
  FilterSettings,
  type paramsType,
} from '@/features/filtered-movies/ui/filter-settings/FilterSettings.tsx'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'

import { useState } from 'react'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { useGetDiscoverMovieQuery } from '@/features/filtered-movies/api/filteredMoviesApi.ts'

export const FilteredMovies = () => {
  const [params, setParams] = useState<paramsType>({
    sort_by: 'popularity.desc',
    //vote_average.gte >=a  vote_average.lte <=b
    rating: [0, 10],
    checkedGenres: [],
  })
  const { data } = useGetDiscoverMovieQuery({
    sort_by: params.sort_by,
    //todo debounce
    'vote_average.gte': params.rating[0],
    'vote_average.lte': params.rating[1],
    with_genres: params.checkedGenres.join(','),
  })
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
