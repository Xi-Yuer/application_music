import { hotRadios } from '@/common/local-data'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  singer: (typeof hotRadios)[0]
}

const AnchorItem: FC<IProps> = ({ singer }) => {
  return (
    <Wrapper>
      <div className="avatar">
        <img src={formatImg(singer.picUrl, 40, 40)} alt="" />
      </div>
      <div className="info">
        <span className="name">{singer.name}</span>
        <span className="desc">{singer.position}</span>
      </div>
    </Wrapper>
  )
}

export default memo(AnchorItem)
