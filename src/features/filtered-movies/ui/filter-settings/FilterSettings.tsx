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

export type paramsType = {
  sortBy: string
  rating: number[]
  checkedGenres: string[]
}

type Props = {
  params: paramsType
  changeParams: (params: paramsType) => void
}

export const FilterSettings = ({ params, changeParams }: Props) => {
  const sortValues: string[] = [
    'Popularity ↑',
    'Popularity ↓',
    'Rating ↑',
    'Rating ↓',
    'Release Date ↑',
    'Title A-Z',
    'Title Z-A',
  ]
  //todo получить их запрсом
  const genresValues = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Abenteuer',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Komödie',
    },
    {
      id: 80,
      name: 'Krimi',
    },
    {
      id: 99,
      name: 'Dokumentarfilm',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Familie',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'Historie',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Musik',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Liebesfilm',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV-Film',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'Kriegsfilm',
    },
    {
      id: 37,
      name: 'Western',
    },
  ]

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
    changeParams({ ...params, sortBy: event.target.value })
  }

  const changeRatingHandler = (_event: Event, newValue: number[]) => {
    changeParams({ ...params, rating: newValue })
  }
  function valuetext(value: number) {
    return `${value}`
  }

  const resetFiltersHandler = () => {
    changeParams({
      sortBy: 'Popularity ↓',
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
              value={params.sortBy}
              onChange={changeSelectHandler}
              sx={{ width: 200 }}
            >
              {sortValues.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
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
            {genresValues.map((item: any) => (
              <Button
                key={item.id}
                variant={params.checkedGenres.includes(item.name) ? 'contained' : 'outlined'}
                onClick={() => changeCheckedGenresHandler(item.name)}
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
