import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import countReducer from './modules/count/index'
import recommendReducer from '@/pages/discover/pages/recommend/store/index'

const store = configureStore({
  reducer: {
    count: countReducer,
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store
