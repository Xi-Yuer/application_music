import { fetchCurrentSongAction } from '@/pages/player/store'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatTime } from '@/utils/format'
import { CaretRightOutlined } from '@ant-design/icons'
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
        {playSongList.map((item) => {
          return (
            <div
              className="song-item"
              key={item.id}
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
      </LeftWrapper>
      <RightWrapper ref={scrollRef}>
        {lyrics.map((item, index) => {
          return (
            <div
              className="lyric-item"
              key={item.time}
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
