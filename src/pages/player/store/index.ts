import { IRootState } from '@/store'
import { parseLyric } from '@/utils/format'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { changeType, ILyric, IPlayerState, ISongDeatil } from './type'

export const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: 0,
  // 播放列表
  playSongList: [],
  // 当前播放的歌曲的索引
  playSongIndex: 0,
  // 播放模式（0 循序播放 1单曲循环 2 随机播放）
  playMode: 0,
  showLyric: true
}

// 传入歌曲id播放当前歌曲
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('currentSong', (id: number, { dispatch }) => {
  // 获取歌曲信息
  getSongDetail<ISongDeatil>(id).then((res) => {
    dispatch(changeCurrentSong(res.songs[0]))
  })
  // 获取歌词信息
  getSongLyric<ILyric>(id).then((res) => {
    const lyric = res?.lrc?.lyric
    dispatch(changeLyricsAction(parseLyric(lyric)))
  })
})

// 播放上/下一曲
export const fetchChangeSongAction = createAsyncThunk<
  void,
  changeType,
  { state: IRootState }
>('changeSong', (pre: changeType, { dispatch, getState }) => {
  // 当前播放索引
  let index = getState().player.playSongIndex
  // 当前播放模式
  const playMode = getState().player.playMode
  // 当前播放列表
  const songList = getState().player.playSongList
  if (songList.length <= 0) return
  // 顺序播放
  if (playMode === 0) {
    if (pre === 'pre') {
      index <= 0 ? (index = songList.length - 1) : index--
    } else {
      index >= songList.length - 1 ? (index = 0) : index++
    }
    // 单曲循环
  } else if (playMode == 1) {
    // 随机播放
  } else {
    index = Math.floor(Math.random() * songList.length)
  }
  // 切换歌曲/请求歌曲信息
  dispatch(fetchCurrentSongAction(songList[index].id))
  dispatch(changePlaySongIndexAction(index))
})

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 当前播放歌曲
    changeCurrentSong(state, { payload }) {
      state.currentSong = payload
    },
    // 当前播放歌曲歌词
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    // 当前歌词索引
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    // 当前播放歌曲列表索引
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    // 当前播放列表
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state) {
      let playMode = state.playMode
      if (playMode === 2) {
        playMode = 0
      } else {
        playMode++
      }
      state.playMode = playMode
    },
    changeShowLyric(state) {
      state.showLyric = !state.showLyric
    }
  }
})

export const {
  changeCurrentSong,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
  changeShowLyric
} = playerSlice.actions
export default playerSlice.reducer
