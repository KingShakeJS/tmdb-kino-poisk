import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Slider,
} from '@mui/material'

import { StyledFilterSettings } from '@/features/filtered-movies/ui/filter-settings/StyledFilterSettings.ts'
import { useGetGenresMovieListQuery } from '@/features/filtered-movies/api/filteredMoviesApi.ts'

export type paramsType = {
  sort_by: string
  rating: number[]
  checkedGenres: number[]
}

type Props = {
  params: paramsType
  changeParams: (params: paramsType) => void
  debounceRating: (...args: any[]) => void
}

export const FilterSettings = ({ params, changeParams, debounceRating }: Props) => {
  const { data } = useGetGenresMovieListQuery()

  const sortBy = {
    'popularity.asc': 'Popularity ↑',
    'popularity.desc': 'Popularity ↓',
    'vote_average.asc': 'Rating ↑',
    'vote_average.desc': 'Rating ↓',
    'primary_release_date.asc': 'Release Date ↑',
    'primary_release_date.desc': 'Release Date ↓',
    'title.asc': 'Title A-Z',
    'title.desc': 'Title Z-A',
  } as const

  const changeCheckedGenresHandler = (genre: string) => {
    const copyCheckedGenres = [...params.checkedGenres]

    const exists = copyCheckedGenres.some((g) => g === genre)

    if (!exists) {
      copyCheckedGenres.push(genre)
    } else {
      const newGenres = copyCheckedGenres.filter((g) => g !== genre)

      changeParams({ ...params, checkedGenres: newGenres })
      return
    }

    changeParams({ ...params, checkedGenres: [...copyCheckedGenres] })
  }

  const changeSelectHandler = (event: SelectChangeEvent) => {
    changeParams({ ...params, sort_by: event.target.value })
  }

  const changeRatingHandler = (_event: Event, newValue: number[]) => {
    changeParams({ ...params, rating: newValue })
    debounceRating(newValue)
  }
  function valuetext(value: number) {
    return `${value}`
  }

  const resetFiltersHandler = () => {
    changeParams({
      sort_by: 'popularity.desc',
      rating: [0, 10],
      checkedGenres: [],
    })
  }
  return (
    <StyledFilterSettings>
      <Paper>
        <h3 className={'supper-title'}>Filters / Sort</h3>

        <FormControl fullWidth>
          <div className={'select'}>
            <h3>Sort by</h3>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={params.sort_by}
              onChange={changeSelectHandler}
              sx={{ width: 200 }}
            >
              {Object.keys(sortBy).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {sortBy[item]}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="rating-range">
            <div className={'title-counter'}>
              <h3>Rating</h3>
              <div>
                {params.rating[0]} - {params.rating[1]}{' '}
              </div>
            </div>
            <Slider
              getAriaLabel={() => 'Rating range'}
              value={params.rating}
              onChange={changeRatingHandler}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={10}
              step={0.1}
            />
          </div>
          <div className="genres">
            {data?.genres.map((item: any) => (
              <Button
                key={item.id}
                variant={params.checkedGenres.includes(item.id) ? 'contained' : 'outlined'}
                onClick={() => changeCheckedGenresHandler(item.id)}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <Button variant="contained" onClick={resetFiltersHandler}>
            Reset Filters
          </Button>
        </FormControl>
      </Paper>
    </StyledFilterSettings>
  )
}
