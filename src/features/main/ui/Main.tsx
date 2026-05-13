// todo ?пепредать каждому свой isLoading

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
  const { data: TopRatedData, isLoading: TopRatedIsLoading } = useGetTopRatedQuery()
  const { data: UpcomingData, isLoading: UpcomingIsLoading } = useGetUpcomingQuery()
  const { data: NowPlayingData, isLoading: NowPlayingIsLoading } = useGetNowPlayingQuery()
  // todo <ViewMoreBtn /> во всех MoviesBlock должна перекидывать на страницу категории и сразу должна быть выьранна нужная категория
  return (
    <div className={'Main'} style={{ width: '100%', minHeight: '100%' }}>
      <SearchSection isLoading={PopularIsLoading} data={PopularData} />
      <div style={{ marginTop: '20px', padding: '40px' }}>
        <MoviesBlock title={'Popular Movies'} data={PopularData} isLoading={PopularIsLoading} />
        <MoviesBlock title={'Top Rated'} data={TopRatedData} isLoading={TopRatedIsLoading} />
        <MoviesBlock title={'Upcoming'} data={UpcomingData} isLoading={UpcomingIsLoading} />
        <MoviesBlock
          title={'Now Playing Movies'}
          data={NowPlayingData}
          isLoading={NowPlayingIsLoading}
        />
      </div>
    </div>
  )
}
