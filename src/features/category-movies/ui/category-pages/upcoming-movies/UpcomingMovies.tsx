import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetUpcomingQuery } from '@/features/main/api/mainApi.ts'

export const UpcomingMovies = () => {
  const { data } = useGetUpcomingQuery()

  return <AllMoviesBlock data={data} title="Upcoming Movies" />
}
