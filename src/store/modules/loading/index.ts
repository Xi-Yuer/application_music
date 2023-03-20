import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false
  },
  reducers: {
    changeLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})

export const { changeLoadingAction } = loadingSlice.actions
export default loadingSlice.reducer
