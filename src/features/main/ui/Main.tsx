//todo

import { SearchSection } from '@/features/main/ui/searchSection/SerchSection.tsx'
import { MoviesBlock } from '@/features/main/ui/moviesBlock/MoviesBlock.tsx'
import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'

export const Main = () => {
  const { data, isLoading } = useGetPopularQuery()

  return (
    <div className={'Main'} style={{ width: '100%', minHeight: '100%' }}>
      <SearchSection isLoading={isLoading} data={data} />
      <div style={{ marginTop: '20px', padding: '40px' }}>
        <MoviesBlock title={'Popular Movies'} data={data} />
        <MoviesBlock title={'Popular Movies'} data={data} />
        <MoviesBlock title={'Popular Movies'} data={data} />
        {/*<MoviesBlock title={'Top Rated'} />*/}
        {/*<MoviesBlock title={'Upcoming'} />*/}
        {/*<MoviesBlock title={'Now Playing Movies'} />*/}
      </div>
    </div>
  )
}
