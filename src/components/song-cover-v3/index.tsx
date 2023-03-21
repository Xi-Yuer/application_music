import { Playlist } from '@/pages/discover/pages/songs/store/type'
import { formatCount, formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import LazyLoadImg from '../lazy-load-img'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Playlist
}

const SongCoverV3: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <Link className="top" to={{ pathname: `/discover/playlist/${data.id}` }}>
        <div className="cover"></div>
        <LazyLoadImg src={formatImg(data.coverImgUrl, 140, 140)} alt="" />
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

export default memo(SongCoverV3)
