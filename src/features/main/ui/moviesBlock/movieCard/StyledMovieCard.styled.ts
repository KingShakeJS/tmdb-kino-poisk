import { Card, styled } from '@mui/material'

type StyledMovieCardProps = {
  rating: number
}
export const StyledMovieCard = styled(Card)<StyledMovieCardProps>`
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.palette.background.paper};

  & .rating {
    position: absolute;
    background-color: ${({ theme, rating }) =>
      rating > 7
        ? theme.palette.success.main
        : rating < 5
          ? theme.palette.error.main
          : theme.palette.warning.main};
    border-radius: 50%;
    padding: 20px;
    bottom: 0;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 50px;
    max-height: 50px;
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: bold;
    font-size: 18px;
  }

  .movie-img {
    transition: transform 0.3s;
  }

  &:hover .movie-img {
    transform: scale(1.1);
  }
  .MuiButton-root {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.grey[300]};
    position: absolute;
    right: 20px;
    width: 60px;
    height: 60px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s;
  }

  &:hover .MuiButton-root {
    opacity: 1;
    pointer-events: auto;
  }

  /* --- Стили для иконки --- */
  .MuiButton-root {
    .MuiSvgIcon-root {
      font-size: 2rem;
      transition: color 0.3s;
      color: ${({ theme }) => theme.palette.common.black};
    }
    &:hover .MuiSvgIcon-root {
      color: ${({ theme }) => theme.palette.error.main};
    }
  }
`
