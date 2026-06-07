import { MySearch } from '@/common/component'
import { StyledSearchBlockMain } from '@/features/main/ui/searchSection/search/StyledSearchBlockMain.ts'
import { useNavigate } from 'react-router'
import { Path } from '@/common/routing'

export const SearchBlockMain = () => {
  const navigate = useNavigate()
  const navigateToSearch = () => {
    navigate(Path.Search)
  }
  return (
    <StyledSearchBlockMain className="search-block-main">
      <h3>Welcome</h3>
      <p>Browse highlighted titles from TMDB</p>
      <MySearch onClick={navigateToSearch} />
    </StyledSearchBlockMain>
  )
}
