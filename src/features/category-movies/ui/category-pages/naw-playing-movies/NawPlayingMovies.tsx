import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetNowPlayingQuery } from '@/features/main/api/mainApi.ts'

export const NawPlayingMovies = () => {
  const { data } = useGetNowPlayingQuery()

  return <AllMoviesBlock data={data} title="Naw Playing Movies" />
}
