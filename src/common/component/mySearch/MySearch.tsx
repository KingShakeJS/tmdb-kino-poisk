import { Button, TextField } from '@mui/material'
import { MyStyledSearch } from '@/common/component/mySearch/MyStyledSearch.styled.ts'
import { type ChangeEvent, useState } from 'react'
//todo сделать изменения значения скип по клику
export const MySearch = () => {
  const [searchText, setSearchText] = useState('')
  const onChangeSearchTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }
  return (
    <MyStyledSearch className="Search">
      <TextField
        variant="outlined"
        placeholder={'Search...'}
        value={searchText}
        onChange={onChangeSearchTextHandler}
      />
      <Button variant="contained" disabled={!searchText}>
        Search
      </Button>
    </MyStyledSearch>
  )
}
