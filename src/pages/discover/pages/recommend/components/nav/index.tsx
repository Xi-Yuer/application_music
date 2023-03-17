import React, { FC, memo, ReactNode } from 'react'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  showMore?: boolean
}

const Nav: FC<IProps> = ({ title, showMore = false }) => {
  return (
    <Wrapper>
      <div className="nav">
        <span className="title">{title}</span>
        {showMore && <span className="more">查看全部</span>}
      </div>
    </Wrapper>
  )
}

export default memo(Nav)
