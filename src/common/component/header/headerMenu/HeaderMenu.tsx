import { NavLink as RouterLink } from 'react-router'
import { Path } from '@/common/routing'

import { Link } from '@mui/material'
import { StyledHeaderMenu } from '@/common/component/header/headerMenu/StyledHeaderMenu.ts'

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu className={'HeaderMenu'}>
      <Link component={RouterLink} to={Path.Main}>
        Main
      </Link>
      <Link component={RouterLink} to={Path.CategoryMovies}>
        Categories
      </Link>
      <Link component={RouterLink} to={Path.FilteredMovies}>
        Filtered Movies
      </Link>
      <Link component={RouterLink} to={Path.Search}>
        Search
      </Link>
      <Link component={RouterLink} to={Path.Favorites}>
        Favorites
      </Link>
    </StyledHeaderMenu>
  )
}
