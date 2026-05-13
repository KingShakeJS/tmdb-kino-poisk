import { useParams } from 'react-router'
import {
  useGetDetailsQuery,
  useGetSimilarQuery,
  useGetCreditsQuery,
} from '@/features/film-page/api/movieApi.ts'
import { AboutFilm } from '@/features/film-page/ui/about-film/AboutFilm.tsx'
import { BigLoader } from '@/common/component'
import { Actors } from '@/features/film-page/ui/actors/Actors.tsx'
import { SimilarMovies } from '@/features/film-page/ui/similary-movies/SimilarMovies.tsx'

export const FilmPage = () => {
  const { id } = useParams()
  const { data: detailData, isLoading: detailIsLoading } = useGetDetailsQuery({ movie_id: id })
  const { data: similarData, isLoading: similarIsLoading } = useGetSimilarQuery({ movie_id: id })
  const { data: creditsData, isLoading: creditsIsLoading } = useGetCreditsQuery({ movie_id: id })

  if (detailIsLoading && similarIsLoading && creditsIsLoading) {
    return <BigLoader />
  }
  return (
    <div style={{ padding: '20px 40px 10px' }}>
      <AboutFilm data={detailData} />
      <Actors data={creditsData} />
      <SimilarMovies data={similarData} />
    </div>
  )
}
