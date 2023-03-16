import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 100
  },
  reducers: {
    chnageCount(state) {
      state.count = state.count + 1
    }
  }
})

export const { chnageCount } = countSlice.actions
export default countSlice.reducer
