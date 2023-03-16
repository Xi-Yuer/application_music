import React, { FC, memo, ReactNode } from 'react'
import { AppHeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = memo(() => {
  return (
    <AppHeaderWrapper>
      <div className="content">
        <div className="logo"></div>
        {headerLinks.map((item) => {
          return (
            <NavLink key={item.link} to={item.link}>
              {item.title}
            </NavLink>
          )
        })}
      </div>
    </AppHeaderWrapper>
  )
})

export default Header
