//todo передать везде правильную data

import { SearchSection } from '@/features/main/ui/searchSection/SerchSection.tsx'
import { MoviesBlock } from '@/features/main/ui/moviesBlock/MoviesBlock.tsx'
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from '@/features/main/api/mainApi.ts'

export const Main = () => {
  const { data: PopularData, isLoading: PopularIsLoading } = useGetPopularQuery()
  const { data: TopRatedData } = useGetTopRatedQuery()
  const { data: UpcomingData } = useGetUpcomingQuery()
  const { data: NowPlayingData } = useGetNowPlayingQuery()

  return (
    <div className={'Main'} style={{ width: '100%', minHeight: '100%' }}>
      <SearchSection isLoading={PopularIsLoading} data={PopularData} />
      <div style={{ marginTop: '20px', padding: '40px' }}>
        <MoviesBlock title={'Popular Movies'} data={PopularData} />
        <MoviesBlock title={'Top Rated'} data={TopRatedData} />
        <MoviesBlock title={'Upcoming'} data={UpcomingData} />
        <MoviesBlock title={'Now Playing Movies'} data={NowPlayingData} />
      </div>
    </div>
  )
}
