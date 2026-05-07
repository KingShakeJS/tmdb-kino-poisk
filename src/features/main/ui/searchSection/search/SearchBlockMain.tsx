import { MySearch } from '@/common/component'
import { StyledSearchBlockMain } from '@/features/main/ui/searchSection/search/StyledSearchBlockMain.ts'

//todo çделать чтоб поиск работал
export const SearchBlockMain = () => {
  return (
    <StyledSearchBlockMain className="search-block-main">
      <h3>Welcome</h3>
      <p>Browse highlighted titles from TMDB</p>
      <MySearch />
    </StyledSearchBlockMain>
  )
}
