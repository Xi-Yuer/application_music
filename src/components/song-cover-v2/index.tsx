import { Album } from '@/pages/discover/pages/recommend/store/type'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import LazyLoadImg from '../lazy-load-img'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Album
}

const SongCoverV2: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <Link to={{ pathname: `/discover/album/${data.id}` }} className="top">
        <div className="cover"></div>
        <LazyLoadImg src={formatImg(data.picUrl, 100, 100)} alt="" />
      </Link>
      <div className="name">{data.name}</div>
      <div className="artist">{data.artist.name}</div>
    </Wrapper>
  )
}

export default memo(SongCoverV2)
