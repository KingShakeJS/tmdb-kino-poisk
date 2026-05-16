import { MovieCard } from '@/common/component/movieCard/MovieCard.tsx'
import { Pagination, Stack } from '@mui/material'
import { useState } from 'react'
//todo реализовать пагинацию, надо пересмотреть урок

type Props = {
  data: any
  title: string
}
export const CategoryContent = ({ data, title }: Props) => {
  const pageCount = data?.total_pages
  const [page, setPage] = useState(1)
  const handlePageChange = (_even: any, value: number) => {
    setPage(value)
    // Здесь можно добавить подгрузку данных по странице
    // например: refetch({ page: value });
  }
  return (
    <div
      style={{
        padding: '40px',
        width: '100%',
      }}
    >
      <h2>{title}</h2>

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
          <MovieCard info={m} key={m.id} />
        ))}
      </div>

      <Stack spacing={2} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Pagination
          count={pageCount}
          page={page} // текущая страница
          onChange={handlePageChange} // обработчик смены страницы
          color="primary"
        />
      </Stack>
    </div>
  )
}
