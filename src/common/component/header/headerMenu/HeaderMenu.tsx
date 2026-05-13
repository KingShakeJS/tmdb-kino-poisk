import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link as RouterLink } from 'react-router'
import { Path } from '@/common/routing'
import { type SyntheticEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { changeCurrentPage, selectCurrentPage } from '@/app/model/app-slice.ts'

export const HeaderMenu = () => {
  const CurrentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()

  const handleChange = (_event: SyntheticEvent, currentPage: string) => {
    dispatch(changeCurrentPage({ currentPage }))
  }

  useEffect(() => {
    const currentPage = localStorage.getItem('currentPage')

    if (currentPage) {
      dispatch(changeCurrentPage({ currentPage }))
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
        to={Path.CategoryMovies}
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
