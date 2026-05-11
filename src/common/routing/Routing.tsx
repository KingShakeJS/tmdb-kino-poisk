import { Route, Routes } from 'react-router'
import { Search } from '@/features/search/ui/Search.tsx'
import { Main } from '@/features/main/ui/Main.tsx'
import { FilteredMovies } from '@/features/filtered-movies/ui/FilteredMovies.tsx'
import { Favorites } from '@/features/favorites/ui/Favorites.tsx'
import { CategoryMovies } from '@/features/category-movies/ui/CategoryMovies.tsx'
import { Page404 } from '@/common/component'
import { FilmPage } from '@/features/film-page/ui/FilmPage.tsx'

export const Path = {
  Main: '/',
  Favorites: 'favorites',
  Search: 'search',
  FilteredMovies: 'filtered-movies',
  CategoryMovies: 'category-movies',
  PageNonFound: '*',

  //////
  Movies: '/movies',
  Movie: `/movie/:id`,
}

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<Main />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.CategoryMovies} element={<CategoryMovies />} />

      <Route path={Path.Movie} element={<FilmPage />} />

      <Route path={Path.PageNonFound} element={<Page404 />} />
    </Routes>
  )
}
