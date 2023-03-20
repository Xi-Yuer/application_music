import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = memo(() => {
  return <div style={{ height: '200px' }}></div>
})

export default Footer
