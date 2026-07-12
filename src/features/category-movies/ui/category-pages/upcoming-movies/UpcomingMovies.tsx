import { AllMoviesBlock } from '@/common/component/all-movies-block/AllMoviesBlock.tsx'
import { useGetUpcomingQuery } from '@/features/main/api/mainApi.ts'
import { useState } from 'react'

export const UpcomingMovies = () => {
  const [page, setPage] = useState(1)

  const { data } = useGetUpcomingQuery({
    params: {
      page,
    },
  })
  return <AllMoviesBlock data={data} title="Upcoming Movies" page={page} setPage={setPage} />
}
