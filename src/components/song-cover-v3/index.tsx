import { Playlist } from '@/pages/discover/pages/songs/store/type'
import { formatCount, formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Playlist
}

const SongCoverV3: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="top">
        <div className="cover"></div>
        <img src={formatImg(data.coverImgUrl, 140, 140)} alt="" />
        <div className="bot">
          <span className="voice"></span>
          <span className="count">{formatCount(data.playCount)}</span>
          <span className="play"></span>
        </div>
      </div>
      <div className="name">{data.name}</div>
    </Wrapper>
  )
}

export default memo(SongCoverV3)
