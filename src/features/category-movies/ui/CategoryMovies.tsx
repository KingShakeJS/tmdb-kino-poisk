//todo делаем эту страницу

import { Link, styled } from '@mui/material'
import { NavLink as RouterLink, Route, Routes } from 'react-router'
import { Path } from '@/common/routing'
import { PopularMovies } from '@/features/category-movies/ui/category-pages/popular-movies/PopularMovies.tsx'
import { TopRatedMovies } from '@/features/category-movies/ui/category-pages/top-rated-movies/TopRatedMovies.tsx'
import { UpcomingMovies } from '@/features/category-movies/ui/category-pages/upcoming-movies/UpcomingMovies.tsx'
import { NawPlayingMovies } from '@/features/category-movies/ui/category-pages/naw-playing-movies/NawPlayingMovies.tsx'

export const StyledLinksBlock = styled('div')(({ theme }) => ({
  width: '50%',
  paddingTop: 20,
  display: 'flex',
  gap: 20,
  justifyContent: 'space-between',
  margin: '0 auto',

  '.MuiLink-root': {
    color: 'currentColor',
    textDecoration: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '8px 16px',
    borderRadius: 4,
    transition: 'background 0.2s',

    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  '.MuiLink-root.active': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

export const CategoryMovies = () => {
  return (
    <div style={{ width: '100%' }}>
      <StyledLinksBlock className={'LinksBlock'}>
        <Link
          component={RouterLink}
          to={`/${Path.CategoryMovies}/${Path.PopularMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Popular Movies
        </Link>
        <Link
          component={RouterLink}
          to={`/${Path.CategoryMovies}/${Path.TopRatedMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Top Rated Movies
        </Link>

        <Link
          component={RouterLink}
          to={`/${Path.CategoryMovies}/${Path.UpcomingMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Upcoming Movies
        </Link>
        <Link
          component={RouterLink}
          to={`/${Path.CategoryMovies}/${Path.NawPlayingMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Naw Playing Movies
        </Link>
      </StyledLinksBlock>

      <div>
        <Routes>
          <Route path={Path.PopularMovies} element={<PopularMovies />} />
          <Route path={Path.TopRatedMovies} element={<TopRatedMovies />} />
          <Route path={Path.UpcomingMovies} element={<UpcomingMovies />} />
          <Route path={Path.NawPlayingMovies} element={<NawPlayingMovies />} />
        </Routes>
      </div>
    </div>
  )
}
