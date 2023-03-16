import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DownLoad: FC<IProps> = memo(() => {
  return <div>DownLoad</div>
})

export default DownLoad
