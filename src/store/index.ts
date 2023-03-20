import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import countReducer from './modules/count/index'
import recommendReducer from '@/pages/discover/pages/recommend/store/index'
import playerReducer from '@/pages/player/store/index'
import rankingReducer from '@/pages/discover/pages/ranking/store/index'
import playListReducer from '@/pages/discover/pages/songs/store/index'
import loadingReducer from '@/store/modules/loading/index'

const store = configureStore({
  reducer: {
    count: countReducer,
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer,
    playlist: playListReducer,
    loading: loadingReducer
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store
