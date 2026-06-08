import type { ThemeMode } from '@/common/theme/theme.ts'
import { createAppSlice } from '@/common/utils/createAppSlice.ts'
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import type { movieInfo } from '@/features/main/model/types/types.ts'

type statusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export const appSlice = createAppSlice({
  name: 'app',
  initialState: {
    themeMode: 'light' as ThemeMode,
    status: 'loading' as statusType,
    currentPage: 'Main' as string,
    searchMovieByTitle: '' as string,
    favoriteMovies: {
      results: [],
    },
    error: null as any,
  },

  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectCurrentPage: (state) => state.currentPage,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
    selectSearchMovieByTitle: (state) => state.searchMovieByTitle,
    selectFavoriteMovies: (state) => state.favoriteMovies,
  },

  reducers: (create) => {
    return {
      setAppError: create.reducer<{ error: string | null }>((state, action) => {
        state.error = action.payload.error
      }),
      setSearchMovieByTitle: create.reducer<{ title: string }>((state, action) => {
        state.searchMovieByTitle = action.payload.title
      }),
      changeMovieToFavorites: create.asyncThunk(
        ({ movie }, { rejectWithValue }) => {
          try {
            return { movie }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const movieIndex = state.favoriteMovies.results.findIndex(
              (m) => m.id === action.payload.movie.id,
            )
            if (movieIndex === -1) {
              state.favoriteMovies.results.push(action.payload.movie)
              localStorage.setItem('favoritesMovies', JSON.stringify(state.favoriteMovies.results))
            } else {
              state.favoriteMovies.results.splice(movieIndex, 1)
              localStorage.setItem('favoritesMovies', JSON.stringify(state.favoriteMovies.results))
            }
          },
        },
      ),

      getFavoriteMovies: create.asyncThunk(
        (_arg, { rejectWithValue }) => {
          try {
            const items = localStorage.getItem('favoritesMovies')
            return { items }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            const favoriteFromLocalStorage = action.payload.items
            if (favoriteFromLocalStorage) {
              state.favoriteMovies.results = JSON.parse(favoriteFromLocalStorage)
            }
          },
        },
      ),
      changeThemeMode: create.asyncThunk(
        ({ themeMode }, { rejectWithValue }) => {
          try {
            return { themeMode }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.themeMode = action.payload.themeMode

            localStorage.setItem('themeMode', action.payload.themeMode)
          },
        },
      ),

      changeCurrentPage: create.asyncThunk(
        ({ currentPage }, { rejectWithValue }) => {
          try {
            return { currentPage }
          } catch (e) {
            return rejectWithValue(null)
          }
        },
        {
          fulfilled: (state, action) => {
            state.currentPage = action.payload.currentPage

            localStorage.setItem('currentPage', action.payload.currentPage)
          },
        },
      ),
    }
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.status = 'loading'
      })
      .addMatcher(isFulfilled, (state) => {
        state.status = 'succeeded'
      })
      .addMatcher(isRejected, (state) => {
        state.status = 'failed'
      })
  },
})
export const appReducer = appSlice.reducer

export const {
  selectThemeMode,
  selectCurrentPage,
  selectStatus,
  selectError,
  selectSearchMovieByTitle,
  selectFavoriteMovies,
} = appSlice.selectors
export const {
  changeThemeMode,
  changeCurrentPage,
  setAppError,
  setSearchMovieByTitle,
  changeMovieToFavorites,
  getFavoriteMovies,
} = appSlice.actions
