import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Radio: FC<IProps> = memo(() => {
  return <div>Radio</div>
})

export default Radio
