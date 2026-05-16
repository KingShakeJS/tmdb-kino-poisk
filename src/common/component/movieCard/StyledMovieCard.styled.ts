import { Card, styled } from '@mui/material'

export const StyledMovieCard = styled(Card)`
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.palette.background.paper};

  /* Вспомогательный контейнер для позиции кнопки */
  & .img-btn-rating {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .rating {
    position: absolute;
    bottom: -10%;
    right: 0;
  }

  .movie-img {
    transition: transform 0.3s;
    display: block;
    margin: 0 auto;
    max-width: 150px;
    border-radius: 20px;
  }

  /* Увеличиваем постер при наведении на всю карточку */
  &:hover .movie-img {
    transform: scale(1.1);
  }

  /* Кнопка лайка — скрыта, пока нет ховера карточки */
  .MuiButton-root {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.grey[300]};
    right: 20px;
    top: 10px;
    width: 60px;
    height: 60px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  /* При наведении на всю карточку показываем кнопку! */
  &:hover .MuiButton-root {
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  /* Стили для иконки */
  .MuiButton-root .MuiSvgIcon-root {
    font-size: 2rem;
    transition: color 0.3s;
    color: ${({ theme }) => theme.palette.common.black};
  }

  /* При наведении — иконка красная */
  .MuiButton-root:hover .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.error.main};
  }
`
