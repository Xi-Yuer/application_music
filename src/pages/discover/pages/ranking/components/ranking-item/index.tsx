import LazyLoadImg from '@/components/lazy-load-img'
import { useAppDispatch } from '@/store'
import { formatImg } from '@/utils/format'
import React, { FC, memo, ReactNode } from 'react'
import { changeCurrentRankingID } from '../../store'
import { List } from '../../store/type'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: List
  currentRanking: number
}

const RankingItem: FC<IProps> = ({ data, currentRanking }) => {
  const disptch = useAppDispatch()
  const handleItemClick = () => {
    disptch(changeCurrentRankingID(data.id))
  }
  return (
    <Wrapper hasCurrent={currentRanking === data.id} onClick={handleItemClick}>
      <div className="left">
        <LazyLoadImg src={formatImg(data.coverImgUrl, 40, 40)} alt="" />
      </div>
      <div className="right">
        <span>{data.name}</span>
        <span className="updateFrequency">{data.updateFrequency}</span>
      </div>
    </Wrapper>
  )
}

export default memo(RankingItem)
