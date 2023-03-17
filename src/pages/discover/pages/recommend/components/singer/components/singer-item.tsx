import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SingerItem: FC<IProps> = memo(() => {
  return <div>SingerItem</div>
})

export default SingerItem
