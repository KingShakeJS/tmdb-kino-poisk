import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetTopRatedQuery } from '@/features/main/api/mainApi.ts'
import { useState } from 'react'

export const TopRatedMovies = () => {
  const [page, setPage] = useState(1)

  const { data } = useGetTopRatedQuery({
    params: {
      page,
    },
  })
  return <AllMoviesBlock data={data} title="Top Rated Movies" page={page} setPage={setPage} />
}
