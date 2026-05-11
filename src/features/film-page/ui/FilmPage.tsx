import { useParams } from 'react-router'
import { useGetDetailsQuery, useGetSimilarQuery } from '@/features/film-page/api/movieApi.ts'
//todo делим сразу на 3 кеомпонента
export const FilmPage = () => {
  const { id } = useParams()
  const { data: detailData } = useGetDetailsQuery({ movie_id: id })
  const { data: similarData } = useGetSimilarQuery({ movie_id: id })
  return (
    <div>
      <div className="aboutFilm"></div>
      <div className="actors"></div>
      <div className="similar"></div>
    </div>
  )
}
