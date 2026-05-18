import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'

import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'

export const PopularMovies = () => {
  const { data } = useGetPopularQuery()

  return <AllMoviesBlock data={data} title="Popular Movies" />
}
