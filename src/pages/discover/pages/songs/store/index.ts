import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHightQuality, getPlayListCatList } from '../service'
import { ICatList, IHightQuality } from './type'

// 获取歌单分类
export const fetchPlayListCatList = createAsyncThunk(
  'catlist',
  async (_, { dispatch }) => {
    getPlayListCatList<ICatList>().then((res) => {
      dispatch(changeCatListAction(res))
    })
  }
)

interface IQuery {
  limit: number
  before?: number
  cat?: string
}
// 获取分类下的歌单信息
export const fetchHightQuality = createAsyncThunk<void, IQuery>(
  'heightquality',
  async (args, { dispatch }) => {
    getHightQuality<IHightQuality>(args.limit, args.before, args.cat).then(
      (res) => {
        dispatch(changeSongListAction(res))
      }
    )
  }
)

interface IState {
  catlist: ICatList | null
  currentCat: string
  songList: IHightQuality | null
}

const initialState: IState = {
  catlist: null,
  currentCat: '全部',
  songList: null
}
const PlayList = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    changeCatListAction(state, { payload }) {
      state.catlist = payload
    },
    changeSongListAction(state, { payload }) {
      state.songList = payload
    },
    changeCurrentCatAction(state, { payload }) {
      state.currentCat = payload
    }
  }
})

export const {
  changeCatListAction,
  changeCurrentCatAction,
  changeSongListAction
} = PlayList.actions
export default PlayList.reducer
