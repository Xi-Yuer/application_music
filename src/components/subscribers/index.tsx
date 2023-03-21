import { Creator } from '@/pages/playlist/type'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import MiniTitle from '../mini-title'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  subscribtors?: Creator[]
}

const Subscribers: FC<IProps> = ({ subscribtors = [] }) => {
  return (
    <Wrapper>
      <MiniTitle title="喜欢这张专辑的人" />
      <div className="subscribers">
        {subscribtors.map((item) => {
          return (
            <img
              key={item.userId}
              src={formatImg(item.avatarUrl, 40, 40)}
              title={item.nickname}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default memo(Subscribers)
