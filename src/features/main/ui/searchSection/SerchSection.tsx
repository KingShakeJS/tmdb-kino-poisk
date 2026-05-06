import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import bgZaglusha from '@/../public/bgZaglushka.png'
import { StyledSearchSection } from '@/features/main/ui/searchSection/StyledSearchSection.ts'
import { Search } from '@/features/main/ui/searchSection/search/Search.tsx'

export const SearchSection = () => {
  const { data, isLoading } = useGetPopularQuery()
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20)
  }
  const img = data?.results[getRandomNumber()]
  const imgUrl = img?.['backdrop_path']
  const propImg = !isLoading ? `${BASE_IMG_URL}${imgUrl}` : bgZaglusha
  return (
    <StyledSearchSection backgroundUrl={propImg}>
      <Search />
    </StyledSearchSection>
  )
}
