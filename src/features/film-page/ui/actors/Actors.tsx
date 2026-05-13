//todo data: any

import { ActorCard } from '@/features/film-page/ui/actors/actor-card/ActorCard.tsx'

type Props = {
  data: any | undefined
}
export const Actors = ({ data }: Props) => {
  return (
    <div className="actors">
      <h3>Coast</h3>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {data?.cast.slice(0, 6).map((actor: any) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  )
}
