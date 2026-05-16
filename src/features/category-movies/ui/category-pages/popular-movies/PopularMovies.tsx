import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'

import { CategoryContent } from '@/features/category-movies/ui/category-content/CategoryContent.tsx'

export const PopularMovies = () => {
  const { data } = useGetPopularQuery()

  return <CategoryContent data={data} title="Popular Movies" />
}
