//todo сверстать эту страницу
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Slider,
  styled,
} from '@mui/material'
import { useState } from 'react'

const StyledSort = styled('div')(({ theme }) => ({
  padding: '10px',
  width: '40%',
  '.select': {
    display: 'flex',
    gap: '10px',
  },
  '.title-container': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.MuiPaper-root': {
    height: '100%',
    padding: '40px',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[700],
  },
  '.genres': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
}))

export const FilteredMovies = () => {
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

  const [checkedGenres, setCheckedGenres] = useState([])

  const changeCheckedGenresHandler = (genre) => {
    const copyCheckedGenres = [...checkedGenres]

    const exists = copyCheckedGenres.some((g) => g === genre)

    if (!exists) {
      copyCheckedGenres.push(genre)
    } else {
      const newGenres = copyCheckedGenres.filter((g) => g !== genre)
      setCheckedGenres(newGenres)
      return
    }

    setCheckedGenres(copyCheckedGenres)
  }

  const [sortBy, setSortBy] = useState(sortValues[0])
  const changeSelectHandler = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string)
  }

  const [rating, setRating] = useState<number[]>([0, 10])
  const changeRatingHandler = (_event: Event, newValue: number[]) => {
    setRating(newValue)
  }
  function valuetext(value: number) {
    return `${value}`
  }

  const resetFiltersHandler = () => {
    setCheckedGenres([])
    setSortBy(sortValues[0])
    setRating([0, 10])
  }
  return (
    <StyledSort>
      <Paper>
        <h3>Filters / Sort</h3>

        <FormControl fullWidth>
          <div className={'select'}>
            <h3>Sort by</h3>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
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
            <div className={'title-container'}>
              <h3>Rating</h3>
              <div>
                {rating[0]} - {rating[1]}{' '}
              </div>
            </div>
            <Slider
              getAriaLabel={() => 'Rating range'}
              value={rating}
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
                variant={checkedGenres.includes(item.name) ? 'contained' : 'outlined'}
                color={checkedGenres.includes(item.name) ? 'primary' : 'default'}
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
    </StyledSort>
  )
}
