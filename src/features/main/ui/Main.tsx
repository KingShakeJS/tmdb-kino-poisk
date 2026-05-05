import { useGetPopularQuery } from '@/features/main/api/mainApi.ts'
import { BASE_IMG_URL } from '@/common/constants/const.ts'
//todo
export const Main = () => {
  const { data } = useGetPopularQuery()
  console.log(data)
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20)
  }
  const imgUrl=data?.results[getRandomNumber()]['backdrop_path']
  return (
    <div>
      <img src={`${BASE_IMG_URL}${imgUrl}`} />
    </div>
  )
}
