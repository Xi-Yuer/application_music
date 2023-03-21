import LazyLoadImg from '@/components/lazy-load-img'
import OperationBtns from '@/components/operation-btns'
import { changePlaySongListAction } from '@/pages/player/store'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatDate, formatImg } from '@/utils/format'
import { HistoryOutlined } from '@ant-design/icons'
import React, { FC, memo, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Wrappper } from './style'

interface IProps {
  children?: ReactNode
}

const RankingDeatilHeader: FC<IProps> = memo(() => {
  const { currentRakingDeatil } = useAppSelector(
    (state) => state.ranking,
    shallowEqual
  )
  const disptch = useAppDispatch()

  const handlePlayClick = () => {
    disptch(changePlaySongListAction(currentRakingDeatil?.playlist.tracks))
  }
  return (
    <Wrappper>
      <div className="left">
        <LazyLoadImg
          src={formatImg(currentRakingDeatil?.playlist.coverImgUrl, 150, 150)}
          alt=""
        />
      </div>
      <div className="right">
        <div className="name">{currentRakingDeatil?.playlist.name}</div>
        <div className="time">
          <span>
            <HistoryOutlined />
          </span>
          <span>最近更新</span>
          <span>
            {formatDate(currentRakingDeatil?.playlist.updateTime || 0)}
          </span>
        </div>
        <OperationBtns
          onPlayBtnClick={handlePlayClick}
          data={{
            subcribe: currentRakingDeatil?.playlist.subscribedCount,
            shared: currentRakingDeatil?.playlist.shareCount,
            commend: currentRakingDeatil?.playlist.commentCount
          }}
        />
      </div>
    </Wrappper>
  )
})

export default RankingDeatilHeader
