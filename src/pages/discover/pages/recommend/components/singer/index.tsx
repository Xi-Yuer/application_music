import React, { FC, memo, ReactNode } from 'react'
import { hotRadios } from '@/common/local-data'
import Nav from '../nav'
import AnchorItem from '../anchor/components/anchor-item'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  return (
    <div>
      <Nav title="入驻歌手" showMore={true} />
      {hotRadios.map((item) => {
        return (
          <div key={item.name}>
            <AnchorItem singer={item} />
          </div>
        )
      })}
    </div>
  )
}

export default memo(Singer)
