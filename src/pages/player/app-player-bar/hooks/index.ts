import { useAppSelector } from '@/store'
import getMusiceResource from '@/utils/getMusicSource'
import { createRef, useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux'

const AudioRef = createRef<HTMLAudioElement>()
export function usePlay() {
  const { currentSong } = useAppSelector((state) => state.player, shallowEqual)
  const [value, setValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [onChangeing, setOnChangeing] = useState(false)

  useEffect(() => {
    AudioRef.current?.setAttribute('src', '')
    // 获取音乐播放地址
    getMusiceResource(currentSong?.id).then((res) => {
      // 设置音乐总时长
      setDuration(currentSong?.dt)
      AudioRef.current?.setAttribute('src', res)
      setIsPlaying(true);
    })
  }, [currentSong])

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
    setIsPlaying,
    duration,
    handlePlayBtnClcik,
    handleTimeUpdate,
    handleSilderChange
  }
}
