import { useAppSelector } from '@/store'
import getMusiceResource from '@/utils/getMusicSource'
import { createRef, useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux'

export function usePlay() {
  const AudioRef = createRef<HTMLAudioElement>()

  const { currentSong } = useAppSelector((state) => state.player, shallowEqual)
  const [value, setValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [onChangeing, setOnChangeing] = useState(false)

  useEffect(() => {
    // 获取音乐播放地址
    getMusiceResource(currentSong.id).then((res) => {
      // 设置音乐总时长
      setDuration(currentSong.dt)
      if (AudioRef.current) {
        AudioRef.current.src = res
      }
    })
  }, [currentSong])

  function handlePlayBtnClcik() {
    if (AudioRef.current) {
      !isPlaying ? AudioRef.current.play() : AudioRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {
    const currentTime = AudioRef.current!.currentTime
    const progress = ((currentTime * 1000) / duration) * 100
    if (!onChangeing) {
      setValue(progress)
      setCurrent(currentTime)
      setOnChangeing(false)
    }
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
    duration,
    handlePlayBtnClcik,
    handleTimeUpdate,
    handleSilderChange
  }
}
