import React, { FC, memo, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import Title from '@/components/title/index'
import { navData } from './config'
import { useAppSelector } from '@/store'
import SongCoverV1 from '@/components/song-cover-v1'
import { HotSongWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = memo(() => {
  const { hotRecommend } = useAppSelector(
    (state) => state.recommend,
    shallowEqual
  )

  return (
    <div>
      <Title data={navData} />
      <HotSongWrapper>
        {hotRecommend?.map((item) => (
          <div key={item.id}>
            <SongCoverV1 data={item} />
          </div>
        ))}
      </HotSongWrapper>
    </div>
  )
})

export default Hot
