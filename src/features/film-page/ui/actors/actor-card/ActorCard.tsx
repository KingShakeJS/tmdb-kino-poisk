import { BASE_IMG_URL } from '@/common/constants/const.ts'
import { Avatar, styled } from '@mui/material'

type Props = {
  actor: any
}
export const StyledActorCard = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  p,
  h4 {
    margin: 0;
  }
`
//todo сделать заглушку для фотки актерав
export const ActorCard = ({ actor }: Props) => {
  return (
    <StyledActorCard className={'actor-card'}>
      <Avatar
        alt=""
        src={`${BASE_IMG_URL}${actor.profile_path}`}
        sx={{ width: 150, height: 150 }}
      />
      <h4>{actor.name}</h4>
      <p>{actor.character}</p>
    </StyledActorCard>
  )
}
