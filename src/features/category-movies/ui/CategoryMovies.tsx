import { styled } from '@mui/material'
import { Route, Routes, useLocation, useNavigate, NavLink } from 'react-router'
import { Path } from '@/common/routing'
import { PopularMovies } from '@/features/category-movies/ui/category-pages/popular-movies/PopularMovies.tsx'
import { TopRatedMovies } from '@/features/category-movies/ui/category-pages/top-rated-movies/TopRatedMovies.tsx'
import { UpcomingMovies } from '@/features/category-movies/ui/category-pages/upcoming-movies/UpcomingMovies.tsx'
import { NawPlayingMovies } from '@/features/category-movies/ui/category-pages/naw-playing-movies/NawPlayingMovies.tsx'
import { StyledContainer } from '@/common/component/container/StyledContainer.ts'
import { StyledLinksBlock } from '@/features/category-movies/ui/StyledLinksBlock.ts'
import { useEffect } from 'react'

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',

  '&.active': {
    color: 'red',
  },
})

export const CategoryMovies = () => {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === Path.CategoryMovies) {
      navigate(`/${Path.CategoryMovies}/${Path.PopularMovies}`)
    }
  }, [])

  return (
    <StyledContainer style={{ width: '100%' }}>
      <StyledLinksBlock className={'LinksBlock'}>
        <StyledNavLink
          to={`${Path.CategoryMovies}/${Path.PopularMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Popular Movies
        </StyledNavLink>
        <StyledNavLink
          to={`${Path.CategoryMovies}/${Path.TopRatedMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Top Rated Movies
        </StyledNavLink>

        <StyledNavLink
          to={`${Path.CategoryMovies}/${Path.UpcomingMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Upcoming Movies
        </StyledNavLink>
        <StyledNavLink
          to={`${Path.CategoryMovies}/${Path.NawPlayingMovies}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Naw Playing Movies
        </StyledNavLink>
      </StyledLinksBlock>

      <div>
        <Routes>
          <Route path={Path.PopularMovies} element={<PopularMovies />} />
          <Route path={Path.TopRatedMovies} element={<TopRatedMovies />} />
          <Route path={Path.UpcomingMovies} element={<UpcomingMovies />} />
          <Route path={Path.NawPlayingMovies} element={<NawPlayingMovies />} />
        </Routes>
      </div>
    </StyledContainer>
  )
}
