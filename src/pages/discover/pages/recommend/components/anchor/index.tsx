import React, { FC, memo, ReactNode } from 'react'
import { hotRadios } from '@/common/local-data'
import AnchorItem from './components/anchor-item'
import Nav from '../nav'
interface IProps {
  children?: ReactNode
}

const Anchor: FC<IProps> = memo(() => {
  return (
    <div>
      <Nav title="热门主播" />
      {hotRadios.map((item) => {
        return (
          <div key={item.name}>
            <AnchorItem singer={item} />
          </div>
        )
      })}
    </div>
  )
})

export default Anchor
