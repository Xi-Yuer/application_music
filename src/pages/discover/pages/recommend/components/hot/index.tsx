import React, { FC, memo, ReactNode, useEffect } from 'react'
import { shallowEqual } from 'react-redux'

import Title from '@/components/title/index'
import { navData } from './config'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchHotRecommend } from '../../store'
import SongCoverV1 from '@/components/song-cover-v1'
import { HotSongWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const { hotRecommend } = useAppSelector(
    (state) => state.recommend,
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchHotRecommend())
  }, [])

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
