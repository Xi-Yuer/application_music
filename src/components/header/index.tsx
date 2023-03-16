import React, { FC, memo, ReactNode } from 'react'
import { AppHeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
interface ILinkItem {
  title: string
  type: string
  link: string
}

const Header: FC<IProps> = memo(() => {
  const Navlink = (item: ILinkItem) => (
    <NavLink key={item.link} to={item.link}>
      {item.title}
    </NavLink>
  )
  const Alink = (item: ILinkItem) => (
    <a href={item.link} key={item.link} target="_blank" rel="noreferrer">
      {item.title}
    </a>
  )
  return (
    <AppHeaderWrapper>
      <div className="content">
        <a href="#" className="logo"></a>
        {headerLinks.map((item) => {
          return item.type === 'link' ? Alink(item) : Navlink(item)
        })}
      </div>
    </AppHeaderWrapper>
  )
})

export default Header
