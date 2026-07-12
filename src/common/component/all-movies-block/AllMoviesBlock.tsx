import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'
import { Pagination, Stack } from '@mui/material'
import { useAppSelector } from '@/common/hooks'
import { selectFavoriteMovies } from '@/app/model/app-slice.ts'

//todo data?.results.length >= 20 ---magicknumber
type Props = {
  data: any
  title?: string
  page?: number
  setPage?: (page: number) => void
}
export const AllMoviesBlock = ({ data, title, page, setPage }: Props) => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies)

  const pageCount = data?.total_pages

  const handlePageChange = (_event: any, value: number) => {
    setPage?.(value)
  }
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <h2>{title}</h2>
      {data?.results.length > 0 ? (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px',
              gridAutoRows: '320px',
              paddingBottom: '20px',
            }}
          >
            {data?.results.map((m: any) => (
              <MovieCard
                info={m}
                key={m.id}
                isFavorite={!!favoriteMovies.results.find((item: any) => item.id === m.id)}
              />
            ))}
          </div>

          {data?.results.length >= 20 && (
            <Stack spacing={2} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Pagination
                count={pageCount}
                page={page} // текущая страница
                onChange={handlePageChange} // обработчик смены страницы
                color="primary"
              />
            </Stack>
          )}
        </>
      ) : (
        'ничего нет'
      )}
    </div>
  )
}
