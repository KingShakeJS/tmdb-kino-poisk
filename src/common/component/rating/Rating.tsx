import { styled } from '@mui/material'

type Props = {
  count: number
}
export const StyledRating = styled('p')<{ rating: number }>`
  background-color: ${({ theme, rating }) =>
    rating > 7
      ? theme.palette.success.main
      : rating < 5
        ? theme.palette.error.main
        : theme.palette.warning.main};
  border-radius: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;
  max-height: 50px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  font-size: 18px;
`

export const Rating = ({ count }: Props) => {
  return (
    <StyledRating rating={count} className={'rating'}>
      {Math.round(count * 10) / 10}
    </StyledRating>
  )
}
