import { CategoryContent } from '@/features/category-movies/ui/category-content/CategoryContent.tsx'
import { useGetNowPlayingQuery } from '@/features/main/api/mainApi.ts'

export const NawPlayingMovies = () => {
  const { data } = useGetNowPlayingQuery()

  return <CategoryContent data={data} title="Naw Playing Movies" />
}
