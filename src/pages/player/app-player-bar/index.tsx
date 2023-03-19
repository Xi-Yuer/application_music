import OutsideClickHandler from '@/components/outside-click-handler'
import { formatImg, formatTime } from '@/utils/format'
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  ProfileOutlined,
  RetweetOutlined,
  RollbackOutlined,
  SoundOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  SwapOutlined
} from '@ant-design/icons'
import { Slider, Badge } from 'antd'
import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SongList from './components/song-list'
import { usePlay } from './hooks'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const {
    AudioRef,
    current,
    duration,
    currentSong,
    value,
    handleSilderChange,
    isPlaying,
    setIsPlaying,
    handlePlayBtnClcik,
    handleTimeUpdate,
    handleNext,
    chnagePlayMode,
    playSongList,
    preSong,
    nextSong,
    playMode,
    showSongList,
    setShowSongList
  } = usePlay()
  return (
    <PlayerBarWrapper>
      <div className="content">
        <BarControl>
          <span onClick={preSong}>
            <StepBackwardOutlined />
          </span>
          <span onClick={() => handlePlayBtnClcik()}>
            {!isPlaying ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
          </span>
          <span onClick={nextSong}>
            <StepForwardOutlined />
          </span>
        </BarControl>
        <BarPlayInfo>
          <Link to="/player">
            <img src={formatImg(currentSong?.al?.picUrl, 32, 32)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name">{currentSong?.name}</div>
              <div className="song-singer">{currentSong?.ar?.[0]?.name}</div>
            </div>
            <div className="progress">
              <Slider
                value={value}
                step={0.1}
                onAfterChange={(value) => handleSilderChange(value, false)}
                onChange={(value) => handleSilderChange(value, false)}
                tooltip={{ open: false }}
              />
              <div className="time">
                <div className="current">{formatTime(current * 1000)}</div>
                <div>/</div>
                <div className="duration">{formatTime(duration)}</div>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator>
          <SoundOutlined />
          <span onClick={chnagePlayMode}>
            {playMode === 0 && <SwapOutlined title="顺序播放" />}
            {playMode === 1 && <RetweetOutlined title="单曲循环" />}
            {playMode === 2 && <RollbackOutlined title="随机播放" />}
          </span>
          <span onClick={() => setShowSongList(!showSongList)}>
            <Badge count={playSongList.length} size="small" color="#242424">
              <ProfileOutlined />
            </Badge>
          </span>
        </BarOperator>
      </div>
      <audio
        ref={AudioRef}
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onPlaying={() => setIsPlaying(true)}
        onError={() => handleNext()}
        onPause={() => setIsPlaying(false)}
        onEnded={() => handleNext()}
      />
      {showSongList && (
        <OutsideClickHandler onOutsideClick={() => setShowSongList(false)}>
          <SongList />
        </OutsideClickHandler>
      )}
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
