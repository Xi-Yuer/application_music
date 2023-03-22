import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentRankingDetail, getRankingList } from '../service'
import { IRankingDetail, IRankingList, List } from './type'

interface IState {
  rankingList: List[]
  currentRankingID: number
  currentRakingDeatil: IRankingDetail | null
}

const initialState: IState = {
  rankingList: [],
  currentRankingID: 19723756,
  currentRakingDeatil: null
}

export const fetchRankingListAction = createAsyncThunk(
  'rangkingList',
  async (arg, { dispatch }) => {
    getRankingList<IRankingList>().then((res) => {
      if (res) {
        dispatch(changeRankingList(res.list))
      }
    })
  }
)

export const fetchCurrentRankingDetailAction = createAsyncThunk(
  'rangkingDetail',
  async (id: number, { dispatch }) => {
    getCurrentRankingDetail<IRankingDetail>(id).then((res) => {
      dispatch(changeCurrentRankingDeatil(res))
    })
  }
)

const RankingSlice = createSlice({
  name: 'rangking',
  initialState,
  reducers: {
    changeRankingList(state, { payload }) {
      state.rankingList = payload
    },
    changeCurrentRankingID(state, { payload }) {
      state.currentRankingID = payload
    },
    changeCurrentRankingDeatil(state, { payload }) {
      state.currentRakingDeatil = payload
    }
  }
})

export const {
  changeRankingList,
  changeCurrentRankingID,
  changeCurrentRankingDeatil
} = RankingSlice.actions
export default RankingSlice.reducer
