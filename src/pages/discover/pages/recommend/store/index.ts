import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '../service'

interface Banner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
}
interface IBanner {
  banners: Banner[]
  code: number
}

interface IInitialState {
  banners: Banner[]
}

// 异步获取数据
export const fetchBannderDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const result: IBanner = await getBanner<IBanner>()
    dispatch(changeBannerAction(result.banners))
  }
)

const initialState: IInitialState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
