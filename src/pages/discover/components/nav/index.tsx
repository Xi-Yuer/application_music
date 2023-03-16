import { dicoverMenu } from '@/common/local-data'
import React, { FC, memo, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const DiscoverNav: FC<IProps> = memo(() => {
  return (
    <NavWrapper>
      {dicoverMenu.map((item) => {
        return (
          <NavLink key={item.title} to={item.link}>
            {item.title}
          </NavLink>
        )
      })}
    </NavWrapper>
  )
})

export default DiscoverNav
