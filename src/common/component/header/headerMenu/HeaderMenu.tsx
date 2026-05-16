import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link as RouterLink, useNavigate } from 'react-router'
import { Path } from '@/common/routing'
import { type SyntheticEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeCurrentPage, selectCurrentPage } from '@/app/model/app-slice.ts'
//todo  избавиться от табов
export const HeaderMenu = () => {
  const CurrentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (_event: SyntheticEvent, currentPage: string) => {
    dispatch(changeCurrentPage({ currentPage }))
  }

  useEffect(() => {
    const currentPage = localStorage.getItem('currentPage')

    if (currentPage) {
      dispatch(changeCurrentPage({ currentPage }))
      switch (currentPage) {
        case 'CategoryMovies':
          navigate(Path.CategoryMovies)
          break
        case 'FilteredMovies':
          navigate(Path.FilteredMovies)
          break
        case 'Search':
          navigate(Path.Search)
          break
        case 'Favorites':
          navigate(Path.Favorites)
          break
        default:
          navigate(Path.Main)
          break
      }
    }
  }, [dispatch])

  return (
    <Tabs
      value={CurrentPage}
      onChange={handleChange}
      textColor="inherit"
      aria-label="secondary tabs example"
      sx={{
        '& .MuiTabs-indicator': {
          display: 'none',
        },
      }}
    >
      <Tab value="Main" label="main" component={RouterLink} to={Path.Main} />
      <Tab
        value="CategoryMovies"
        label="Category Movies"
        component={RouterLink}
        to={`${Path.CategoryMovies}/${Path.PopularMovies}`}
      />
      <Tab
        value="FilteredMovies"
        label="Filtered Movies"
        component={RouterLink}
        to={Path.FilteredMovies}
      />
      <Tab value="Search" label="Search" component={RouterLink} to={Path.Search} />
      <Tab value="Favorites" label="Favorites" component={RouterLink} to={Path.Favorites} />
    </Tabs>
  )
}
