import { fetchLikeOther } from '@/pages/playlist/service'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LazyLoadImg from '../lazy-load-img'
import MiniTitle from '../mini-title'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  likeOtherID?: number
}

interface IList {
  creator: { userId: string; nickname: string }
  coverImgUrl: string
  name: string
  id: string
}
const LikeOther: FC<IProps> = ({ likeOtherID }) => {
  const [list, setList] = useState<IList[]>([])
  useEffect(() => {
    if (likeOtherID) {
      fetchLikeOther(likeOtherID).then((res) => {
        setList(res.playlists)
      })
    }
  }, [likeOtherID])

  return (
    <Wrapper>
      <MiniTitle title="热门歌单" />
      <div className="list">
        {list.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="left">
                <LazyLoadImg src={formatImg(item.coverImgUrl, 50, 50)} alt="" />
              </div>
              <div className="right">
                <Link
                  to={{ pathname: `/discover/playlist/${item.id}` }}
                  className="name"
                >
                  {item.name}
                </Link>
                <div>
                  <span>by:</span>
                  <span className="nickname">{item.creator.nickname}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default memo(LikeOther)
