import { Skeleton } from '@mui/material'

export const MovieCardSkeleton = () => {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Skeleton variant="rounded" width={150} height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={120} />
    </div>
  )
}
