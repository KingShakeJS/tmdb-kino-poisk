import { Button, TextField } from '@mui/material'
import { MyStyledSearch } from '@/common/component/mySearch/MyStyledSearch.styled.ts'
import { type ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { selectSearchMovieByTitle, setSearchMovieByTitle } from '@/app/model/app-slice.ts'

export const MySearch = ({ onClick }: any) => {
  const title = useAppSelector(selectSearchMovieByTitle)
  const [localSearchText, setLocalSearchText] = useState(title)

  const dispatch = useAppDispatch()

  const onChangeSearchTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchText(e.currentTarget.value)
  }
  const onClickHandler = () => {
    dispatch(setSearchMovieByTitle({ title: localSearchText }))
    onClick()
  }

  return (
    <MyStyledSearch className="Search">
      <TextField
        variant="outlined"
        placeholder={'Search...'}
        value={localSearchText}
        onChange={onChangeSearchTextHandler}
      />
      <Button onClick={onClickHandler} variant="contained" disabled={!localSearchText}>
        Search
      </Button>
    </MyStyledSearch>
  )
}
