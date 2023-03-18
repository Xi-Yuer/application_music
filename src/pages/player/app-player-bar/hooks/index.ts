import { createRef, useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux'

import { message } from 'antd';

import { useAppDispatch, useAppSelector } from '@/store'
import getMusiceResource from '@/utils/getMusicSource'
import { changeLyricIndexAction } from '../../store';

const AudioRef = createRef<HTMLAudioElement>()
export function usePlay() {
  const dispatch = useAppDispatch()
  const { currentSong, lyrics, lyricIndex } = useAppSelector((state) => state.player, shallowEqual)
  const [value, setValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [onChangeing, setOnChangeing] = useState(false)

  useEffect(() => {
    // 获取音乐播放地址
    getMusiceResource(currentSong?.id).then((res) => {
      // 设置音乐总时长
      setDuration(currentSong?.dt || 0)
      AudioRef.current?.setAttribute('src', res)
    })
  }, [currentSong])

  useEffect(() => {
    if (isPlaying && lyrics?.[lyricIndex - 1]?.text) {
      message.open({
        content: lyrics?.[lyricIndex - 1]?.text,
        duration: 0,
        key: 'lyric',
      });
    } else {
      message.destroy('lyric')
    }
  }, [lyricIndex, isPlaying])


  function handlePlayBtnClcik() {
    if (AudioRef.current) {
      !isPlaying ? AudioRef.current.play().then(() =>
        setIsPlaying(true)) : AudioRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {
    const currentTime = AudioRef.current!.currentTime
    const progress = ((currentTime * 1000) / duration) * 100
    let i = -1
    for (let index = 0; index < lyrics.length; index++) {
      if (currentTime < lyrics[index].time / 1000) {
        i = index
        break;
      }
    }
    if (!onChangeing) {
      setValue(progress)
      setCurrent(currentTime)
      setOnChangeing(false)
    }
    if (lyricIndex === i || i === -1) return
    dispatch(changeLyricIndexAction(i))
  }

  function handleSilderChange(value: number, x: boolean) {
    const current = (value / 100) * duration
    if (AudioRef.current) {
      AudioRef.current!.currentTime = current / 1000
    }
    setOnChangeing(x)
    setCurrent(current / 1000)
    setValue(value)
  }

  return {
    AudioRef,
    currentSong,
    current,
    value,
    setValue,
    isPlaying,
    setIsPlaying,
    duration,
    handlePlayBtnClcik,
    handleTimeUpdate,
    handleSilderChange
  }
}
