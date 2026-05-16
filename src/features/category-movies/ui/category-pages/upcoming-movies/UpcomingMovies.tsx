import { CategoryContent } from '@/features/category-movies/ui/category-content/CategoryContent.tsx'
import { useGetUpcomingQuery } from '@/features/main/api/mainApi.ts'

export const UpcomingMovies = () => {
  const { data } = useGetUpcomingQuery()

  return <CategoryContent data={data} title="Upcoming Movies" />
}
