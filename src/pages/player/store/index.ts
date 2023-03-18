import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail } from '../service'
import { ISongDeatil } from './type'

interface IPlayerState {
  currentSong: ISongDeatil & any
}
export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id: number, { dispatch }) => {
  // 获取歌曲信息
  getSongDetail<ISongDeatil>(id).then(res => {
    dispatch(changeCurrentSong(res.songs[0]))
  })
})
const initialState: IPlayerState = {
  currentSong: {}
}

const playerSlice = createSlice({
  name: 'plaer',
  initialState,
  reducers: {
    changeCurrentSong(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSong } = playerSlice.actions
export default playerSlice.reducer
