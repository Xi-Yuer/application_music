import { fetchCurrentSongAction } from '@/pages/player/store'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatTime } from '@/utils/format'
import { CaretRightOutlined } from '@ant-design/icons'
import { Empty } from 'antd'
import React, { FC, memo, ReactNode, useEffect, useRef } from 'react'
import { LeftWrapper, RightWrapper, Title, Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SongList: FC<IProps> = memo(() => {
  const { playSongList, lyrics, lyricIndex, currentSong } = useAppSelector(
    (state) => state.player
  )
  const disptch = useAppDispatch()
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSongItemClick = (id: number) => {
    disptch(fetchCurrentSongAction(id))
  }

  useEffect(() => {
    if (scrollRef.current) {
      const containerHeight = scrollRef.current.clientHeight // 容器高度
      const scrollTop = Math.max(0, lyricIndex * 32 - containerHeight / 2) // 计算滚动条位置，确保歌词在可视区域的中间位置
      scrollRef.current.scrollTo({
        top: scrollTop
      })
    }
  }, [lyricIndex])
  return (
    <Wrapper>
      <Title>
        <h2>播放列表({playSongList.length})</h2>
        <div className="song-name">{currentSong.name}</div>
      </Title>
      <LeftWrapper>
        {playSongList.map((item, index) => {
          return (
            <div
              className="song-item"
              key={index}
              onClick={() => handleSongItemClick(item.id)}
              style={
                item.id === currentSong.id
                  ? { background: '#0f0f0f' }
                  : undefined
              }
            >
              {item.id === currentSong.id && (
                <span className="play-icon">
                  <CaretRightOutlined />
                </span>
              )}
              <div className="name">{item.name}</div>
              <div className="right">
                <div className="singer">{item.ar[0].name}</div>
                <div className="time">{formatTime(item.dt)}</div>
              </div>
            </div>
          )
        })}
        {playSongList.length === 0 && (
          <div className="empty">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <span style={{ color: '#aaaaaa' }}>你还没有添加任何歌曲</span>
              }
            />
          </div>
        )}
      </LeftWrapper>
      <RightWrapper ref={scrollRef}>
        {lyrics.map((item, index) => {
          return (
            <div
              className="lyric-item"
              key={index}
              style={
                index === lyricIndex - 1
                  ? { color: 'red', fontSize: '16px' }
                  : undefined
              }
            >
              {item.text}
            </div>
          )
        })}
      </RightWrapper>
    </Wrapper>
  )
})

export default SongList
