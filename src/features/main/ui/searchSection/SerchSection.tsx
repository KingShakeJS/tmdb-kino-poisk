import { type getPopularRequestType } from '@/features/main/api/mainApi.ts'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
import bgZaglusha from '@/../public/bgZaglushka.png'
import { StyledSearchSection } from '@/features/main/ui/searchSection/StyledSearchSection.ts'
import { SearchBlockMain } from '@/features/main/ui/searchSection/search/SearchBlockMain.tsx'

type Props = {
  isLoading: boolean
  data: getPopularRequestType | undefined
}

export const SearchSection = ({ isLoading, data }: Props) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20)
  }
  const img = data?.results[getRandomNumber()]
  const imgUrl = img?.['backdrop_path']
  const propImg = !isLoading ? `${BASE_IMG_URL}${imgUrl}` : bgZaglusha
  return (
    <StyledSearchSection backgroundUrl={propImg}>
      <SearchBlockMain />
    </StyledSearchSection>
  )
}
