import SongList from '@/components/song-list'
import { useAppDispatch, useAppSelector } from '@/store'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import RankingDeatilHeader from './components/rangking-detail-header'
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
  const {
    rankingList,
    currentRankingID = 19723756,
    currentRakingDeatil
  } = useAppSelector((state) => state.ranking, shallowEqual)
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
        <SongList
          list={currentRakingDeatil?.playlist.tracks}
          playCount={currentRakingDeatil?.playlist.playCount}
        />
      </RightWrapper>
    </Wrapper>
  )
})

export default Ranking
