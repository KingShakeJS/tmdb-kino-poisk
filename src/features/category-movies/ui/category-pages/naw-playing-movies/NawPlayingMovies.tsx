import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetNowPlayingQuery } from '@/features/main/api/mainApi.ts'
import { useState } from 'react'

export const NawPlayingMovies = () => {




  const [page, setPage] = useState(1)

  const { data } = useGetNowPlayingQuery({
    params: {
      page,
    },
  })
  return <AllMoviesBlock data={data} title="Naw Playing Movies" page={page} setPage={setPage} />
}
