import { SearchSection } from '@/features/main/ui/searchSection/SerchSection.tsx'
import { MoviesBlock } from '@/features/main/ui/moviesBlock/MoviesBlock.tsx'
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from '@/features/main/api/mainApi.ts'
import { Path } from '@/common/routing'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'

export const Main = () => {
  const { data: PopularData, isLoading: PopularIsLoading } = useGetPopularQuery()
  const { data: TopRatedData, isLoading: TopRatedIsLoading } = useGetTopRatedQuery()
  const { data: UpcomingData, isLoading: UpcomingIsLoading } = useGetUpcomingQuery()
  const { data: NowPlayingData, isLoading: NowPlayingIsLoading } = useGetNowPlayingQuery()
  return (
    <div className={'Main'} style={{ width: '100%', minHeight: '100%' }}>
      <SearchSection isLoading={PopularIsLoading} data={PopularData} />
      <StyledContainer>
        <StyledContainer>
          <MoviesBlock
            title={'Popular Movies'}
            data={PopularData}
            isLoading={PopularIsLoading}
            category={Path.PopularMovies}
          />
          <MoviesBlock
            title={'Top Rated'}
            data={TopRatedData}
            isLoading={TopRatedIsLoading}
            category={Path.TopRatedMovies}
          />
          <MoviesBlock
            title={'Upcoming'}
            data={UpcomingData}
            isLoading={UpcomingIsLoading}
            category={Path.UpcomingMovies}
          />
          <MoviesBlock
            title={'Now Playing Movies'}
            data={NowPlayingData}
            isLoading={NowPlayingIsLoading}
            category={Path.NawPlayingMovies}
          />
        </StyledContainer>
      </StyledContainer>
    </div>
  )
}
