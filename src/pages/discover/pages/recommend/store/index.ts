import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner, getHotRecommend, getNewAlbum, getRanking } from '../service'
import type {
  IBanner,
  IHotRecommend,
  IInitialState,
  INewAlbum,
  IRanking
} from './type'

const rangkingIds = [19723756, 3779629, 2884035]

// 异步获取数据
export const fetchDiscoverData = createAsyncThunk(
  'discover',
  (_, { dispatch }) => {
    getBanner<IBanner>().then(({ banners }) => {
      dispatch(changeBannerAction(banners))
    })
    getHotRecommend<IHotRecommend>().then(({ result }) => {
      dispatch(changeHotRecommendAction(result))
    })
    getNewAlbum<INewAlbum>().then(({ albums }) => {
      dispatch(changeNewAlbumAction(albums))
    })

    // 获取榜单数据
    for (const id of rangkingIds) {
      getRanking<IRanking>(id).then((res) => {
        switch (id) {
          case 19723756:
            dispatch(changeUpRankingAction(res?.playlist))
            break
          case 3779629:
            dispatch(changeNewRankingAction(res?.playlist))
            break
          case 2884035:
            dispatch(changeOriginRankingAction(res?.playlist))
            break
        }
      })
    }
  }
)

const initialState: IInitialState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: null,
  newRanking: null,
  originRanking: null
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
    },
    changeUpRankingAction(state, { payload }) {
      state.upRanking = payload
    },
    changeNewRankingAction(state, { payload }) {
      state.newRanking = payload
    },
    changeOriginRankingAction(state, { payload }) {
      state.originRanking = payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeUpRankingAction,
  changeNewRankingAction,
  changeOriginRankingAction
} = recommendSlice.actions
export default recommendSlice.reducer
