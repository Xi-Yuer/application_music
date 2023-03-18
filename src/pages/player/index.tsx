import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = memo(() => {
  return <div>Player</div>
})

export default Player
