import { Result } from '@/pages/discover/pages/recommend/store/type'
import { formatCount, formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Result
}

const SongCoverV1: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <Link className="top" to={{ pathname: `/discover/playlist/${data.id}` }}>
        <div className="cover"></div>
        <img src={formatImg(data.picUrl, 140, 140)} alt="" />
        <div className="bot">
          <span className="voice"></span>
          <span className="count">{formatCount(data.playCount)}</span>
          <span className="play"></span>
        </div>
      </Link>
      <div className="name">{data.name}</div>
    </Wrapper>
  )
}

export default memo(SongCoverV1)
