import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'

type Props = {
  data: any | undefined
}
export const SimilarMovies = ({ data }: Props) => {
  return (
    <div className="similar">
      <h3>Similar Movies</h3>
      <div style={{ display: 'flex', gridGap: '10px' }}>
        {data?.results.slice(0, 6).map((f: any) => (
          <MovieCard key={f.id} info={f} />
        ))}
      </div>
    </div>
  )
}
