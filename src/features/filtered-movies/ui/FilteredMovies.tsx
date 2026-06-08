import {
  FilterSettings,
  type paramsType,
} from '@/features/filtered-movies/ui/filter-settings/FilterSettings.tsx'
import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'

import { useRef, useState } from 'react'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { useGetDiscoverMovieQuery } from '@/features/filtered-movies/api/filteredMoviesApi.ts'
import { debounce } from '@/common/utils/debouce.ts'
//todo квери параметры сохранитиь в урле
export const FilteredMovies = () => {
  const [params, setParams] = useState<paramsType>({
    sort_by: 'popularity.desc',
    //vote_average.gte >=a  vote_average.lte <=b
    rating: [0, 10],
    checkedGenres: [],
  })

  const [lazyRating, setLazyRating] = useState<number[]>([0, 10])

  const debounceRating = useRef(
    debounce((newRating: number[]) => {
      setLazyRating(newRating)
    }, 2000),
  ).current

  const { data } = useGetDiscoverMovieQuery({
    sort_by: params.sort_by,
    'vote_average.gte': lazyRating[0],
    'vote_average.lte': lazyRating[1],
    with_genres: params.checkedGenres.join(','),
  })
  return (
    <StyledContainer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
      }}
    >
      <FilterSettings params={params} changeParams={setParams} debounceRating={debounceRating} />
      <AllMoviesBlock data={data} />
    </StyledContainer>
  )
}
