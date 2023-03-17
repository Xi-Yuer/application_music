import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getNewAlbum } from '../service'
import type { IBanner, IHotRecommend, IInitialState, INewAlbum } from './type'

// 异步获取数据
// 轮播图
export const fetchBannderDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const result: IBanner = await getBanner<IBanner>()
    dispatch(changeBannerAction(result.banners))
  }
)
// 热门推荐
export const fetchHotRecommend = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const { result } = await getHotRecommend<IHotRecommend>()
    dispatch(changeHotRecommendAction(result))
  }
)

// 新碟上架
export const fetchNewAlbum = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const { albums } = await getNewAlbum<INewAlbum>()
    dispatch(changeNewAlbumAction(albums))
  }
)

const initialState: IInitialState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
})

export const { changeBannerAction, changeHotRecommendAction, changeNewAlbumAction } = recommendSlice.actions
export default recommendSlice.reducer
