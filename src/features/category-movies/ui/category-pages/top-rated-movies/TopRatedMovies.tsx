import { CategoryContent } from '@/features/category-movies/ui/category-content/CategoryContent.tsx'
import { useGetTopRatedQuery } from '@/features/main/api/mainApi.ts'

export const TopRatedMovies = () => {
  const { data } = useGetTopRatedQuery()

  return <CategoryContent data={data} title="Top Rated Movies" />
}
