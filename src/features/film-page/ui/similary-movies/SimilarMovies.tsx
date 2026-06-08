import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'
import { useAppSelector } from '@/common/hooks'
import { selectFavoriteMovies } from '@/app/model/app-slice.ts'

type Props = {
  data: any | undefined
}
export const SimilarMovies = ({ data }: Props) => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies)

  return (
    <div className="similar">
      <h3>Similar Movies</h3>
      <div style={{ display: 'flex', gridGap: '10px' }}>
        {data?.results.slice(0, 6).map((f: any) => (
          <MovieCard
            isFavorite={!!favoriteMovies.results.find((item: any) => item.id === f.id)}
            key={f.id}
            info={f}
          />
        ))}
      </div>
    </div>
  )
}
