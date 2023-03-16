import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = memo(() => {
  return <div>Singer</div>
})

export default Singer
