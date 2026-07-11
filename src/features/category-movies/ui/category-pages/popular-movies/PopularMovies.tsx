import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'

import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useState } from 'react'

export const PopularMovies = () => {
  const [page, setPage] = useState(1)

  const { data } = useGetPopularQuery({
    params:{page}
  })
  return <AllMoviesBlock data={data} title="Popular Movies" page={page} setPage={setPage} />
}
