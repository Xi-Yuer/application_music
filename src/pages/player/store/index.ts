import { parseLyric } from '@/utils/format'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { ILyric, IPlayerState, ISongDeatil } from './type'

export const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: 0,
  // 播放列表
  playSongList: [],
  // 当前播放的歌曲的索引
  playSongIndex: -1
}

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 获取歌曲信息
    getSongDetail<ISongDeatil>(id).then((res) => {
      dispatch(changeCurrentSong(res.songs[0]))
    })
    // 获取歌词信息
    getSongLyric<ILyric>(id).then((res) => {
      const lyric = res.lrc.lyric
      dispatch(changeLyricsAction(parseLyric(lyric)))
    })
  }
)

const playerSlice = createSlice({
  name: 'plaer',
  initialState,
  reducers: {
    changeCurrentSong(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const { changeCurrentSong, changeLyricsAction, changeLyricIndexAction } =
  playerSlice.actions
export default playerSlice.reducer
