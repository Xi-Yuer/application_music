import Title from '@/components/title'
import { useAppSelector } from '@/store'
import React, { FC, memo, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import RangkingItem from './components/ranking-item'
import { ContentWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = memo(() => {
  const navData = {
    title: '榜单',
    moreLink: '/discover/ranking'
  }
  const { upRanking, newRanking, originRanking } = useAppSelector(
    (state) => state.recommend,
    shallowEqual
  )
  return (
    <div>
      <Title data={navData} />
      <ContentWrapper>
        <RangkingItem data={upRanking} />
        <RangkingItem data={newRanking} />
        <RangkingItem data={originRanking} />
      </ContentWrapper>
    </div>
  )
})

export default Ranking
