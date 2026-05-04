import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link as RouterLink } from 'react-router'
import { Path } from '@/common/routing'

export const HeaderMenu = () => {
  const [value, setValue] = React.useState('Main')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
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
      <Tab value="Favorites" label="Favorites" component={RouterLink} to={Path.Favorites} />
      <Tab value="Search" label="Search" component={RouterLink} to={Path.Search} />
      <Tab value="FilteredMovies" label="IFiltered Movies" component={RouterLink} to={Path.FilteredMovies} />
      <Tab value="CategoryMovies" label="Category Movies" component={RouterLink} to={Path.CategoryMovies} />
    </Tabs>
  )
}
