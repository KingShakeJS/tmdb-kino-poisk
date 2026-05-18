import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetTopRatedQuery } from '@/features/main/api/mainApi.ts'

export const TopRatedMovies = () => {
  const { data } = useGetTopRatedQuery()

  return <AllMoviesBlock data={data} title="Top Rated Movies" />
}
