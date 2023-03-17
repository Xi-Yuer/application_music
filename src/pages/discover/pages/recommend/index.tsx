import { useAppDispatch } from '@/store'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import Anchor from './components/anchor'
import Banner from './components/banner'
import Hot from './components/hot'
import Login from './components/login'
import New from './components/new'
import Ranking from './components/ranking'
import Singer from './components/singer'
import { fetchDiscoverData } from './store'
import { LeftWrapper, MainWrapper, RightWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  // 请求数据
  useEffect(() => {
    dispatch(fetchDiscoverData())
  }, [])

  return (
    <>
      <Banner />
      <MainWrapper>
        <LeftWrapper>
          <Hot />
          <New />
          <Ranking />
        </LeftWrapper>
        <RightWrapper>
          <Login />
          <Singer />
          <Anchor />
        </RightWrapper>
      </MainWrapper>
    </>
  )
})

export default Recommend
