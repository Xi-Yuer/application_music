import { Album } from '@/pages/discover/pages/recommend/store/type'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Album
}

const SongCoverV2: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="top">
        <div className="cover"></div>
        <img src={formatImg(data.picUrl, 100, 100)} alt="" />
      </div>
      <div className="name">{data.name}</div>
      <div className="artist">{data.artist.name}</div>
    </Wrapper>
  )
}

export default memo(SongCoverV2)
