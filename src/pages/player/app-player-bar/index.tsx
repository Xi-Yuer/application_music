import { formatImg, formatTime } from '@/utils/format'
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  ProfileOutlined,
  SoundOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { Slider } from 'antd'
import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
    handleTimeUpdate
  } = usePlay()
  return (
    <PlayerBarWrapper>
      <div className="content">
        <BarControl>
          <span>
            <StepBackwardOutlined />
          </span>
          <span onClick={() => handlePlayBtnClcik()}>
            {!isPlaying ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
          </span>
          <span>
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
          <SyncOutlined />
          <ProfileOutlined />
        </BarOperator>
      </div>
      <audio
        ref={AudioRef}
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onPlaying={() => setIsPlaying(true)}
        onError={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
