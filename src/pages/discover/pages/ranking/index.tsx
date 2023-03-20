import { useAppDispatch, useAppSelector } from '@/store'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import RankingDeatilHeader from './components/rangking-detail-header'
import RankingDetailList from './components/ranking-detail-list'
import RankingItem from './components/ranking-item'
import {
  fetchCurrentRankingDetailAction,
  fetchRankingListAction
} from './store'
import { LeftWrapper, RightWrapper, Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const { rankingList, currentRankingID = 19723756 } = useAppSelector(
    (state) => state.ranking
  )
  useEffect(() => {
    dispatch(fetchRankingListAction())
  }, [])

  useEffect(() => {
    if (currentRankingID) {
      dispatch(fetchCurrentRankingDetailAction(currentRankingID))
    }
  }, [currentRankingID])

  return (
    <Wrapper>
      <LeftWrapper>
        <h2 className="title">云音乐特色榜</h2>
        {rankingList.slice(0, 4).map((item) => (
          <div key={item.id}>
            <RankingItem data={item} currentRanking={currentRankingID} />
          </div>
        ))}
        <h2 className="title">全球媒体榜</h2>
        {rankingList.slice(4, rankingList.length).map((item) => (
          <div key={item.id}>
            <RankingItem data={item} currentRanking={currentRankingID} />
          </div>
        ))}
      </LeftWrapper>
      <RightWrapper>
        <RankingDeatilHeader />
        <RankingDetailList />
      </RightWrapper>
    </Wrapper>
  )
})

export default Ranking
