import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  subtitle?: string
  moreLink?: string
}

const MiniTitle: FC<IProps> = ({ title, subtitle, moreLink = '/' }) => {
  return (
    <Wrapper>
      <span className="title">{title}</span>
      {subtitle && <Link to={moreLink}>{subtitle}</Link>}
    </Wrapper>
  )
}

export default memo(MiniTitle)
