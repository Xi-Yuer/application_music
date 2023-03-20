import { fetchCurrentSongAction } from '@/pages/player/store'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatImg, formatTime } from '@/utils/format'
import React, { CSSProperties, FC, memo, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RankingDetailList: FC<IProps> = memo(() => {
  const { currentRakingDeatil } = useAppSelector(
    (state) => state.ranking,
    shallowEqual
  )
  const dispatch = useAppDispatch()

  const handleItemClick = (id: number) => {
    dispatch(fetchCurrentSongAction(id))
  }

  const style = (index: number) => {
    let style: CSSProperties | undefined
    if (index <= 2) {
      if (index % 2 === 0) {
        style = {
          backgroundColor: 'white',
          height: '80px'
        }
      } else {
        style = {
          height: '80px'
        }
      }
    } else {
      if (index % 2 === 0) {
        style = {
          backgroundColor: 'white'
        }
      }
    }
    return style
  }
  return (
    <Wrapper>
      <div className="header">
        <div className="left">
          <span className="title">歌曲列表</span>
          <span className="count">
            {currentRakingDeatil?.playlist.tracks.length}首歌
          </span>
        </div>
        <div className="right">
          <span className="count">播放:</span>
          <span className="num">{currentRakingDeatil?.playlist.playCount}</span>
          <span className="count">次</span>
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="index"></div>
          <div className="title">标题</div>
          <div className="time">时长</div>
          <div className="singer">歌手</div>
        </div>
        {currentRakingDeatil?.playlist.tracks.map((item, index) => {
          return index <= 2 ? (
            <div key={item.id} className="table-list" style={style(index)}>
              <div className="index">{index + 1}</div>
              <div className="title">
                <img src={formatImg(item.al.picUrl, 50, 50)} alt="" />
                <span
                  onClick={() => handleItemClick(item.id)}
                  className="line-througth"
                >
                  {item.name}
                </span>
              </div>
              <div className="time">{formatTime(item.dt)}</div>
              <div className="singer">
                {item.ar.map((i) => {
                  return (
                    <span className="line-througth" key={i.id}>
                      {i.name}{' '}
                    </span>
                  )
                })}
              </div>
            </div>
          ) : (
            <div key={item.id} className="table-list" style={style(index)}>
              <div className="index">{index + 1}</div>
              <div className="title">
                <span
                  onClick={() => handleItemClick(item.id)}
                  className="line-througth"
                >
                  {item.name}
                </span>
              </div>
              <div className="time">{formatTime(item.dt)}</div>
              <div className="singer">
                {item.ar.map((i) => {
                  return (
                    <span className="line-througth" key={i.id}>
                      {i.name}{' '}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
})

export default RankingDetailList
