import { changePlaySongListAction } from '@/pages/player/store'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatDate, formatImg } from '@/utils/format'
import {
  CloudDownloadOutlined,
  CommentOutlined,
  HistoryOutlined,
  PlayCircleOutlined,
  PlusSquareOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
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
        <img
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
        <div className="info">
          <span className="btn" onClick={handlePlayClick}>
            <PlayCircleOutlined />
            播放
          </span>
          <span className="btn">
            <PlusSquareOutlined />(
            {currentRakingDeatil?.playlist.subscribedCount})
          </span>
          <span className="btn">
            <ShareAltOutlined />({currentRakingDeatil?.playlist.shareCount})
          </span>
          <span className="btn">
            <CloudDownloadOutlined />
            下载
          </span>
          <span className="btn">
            <CommentOutlined />({currentRakingDeatil?.playlist.commentCount})
          </span>
        </div>
      </div>
    </Wrappper>
  )
})

export default RankingDeatilHeader
