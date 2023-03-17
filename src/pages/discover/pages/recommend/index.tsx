import { useAppDispatch } from '@/store'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import Banner from './components/banner'
import Hot from './components/hot'
import New from './components/new'
import { fetchBannderDataAction, fetchNewAlbum } from './store'
import { LeftWrapper, MainWrapper, RightWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  // 请求数据
  useEffect(() => {
    dispatch(fetchBannderDataAction())
    dispatch(fetchNewAlbum())
  }, [])

  return (
    <>
      <Banner />
      <MainWrapper>
        <LeftWrapper>
          <Hot />
          <New />
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </MainWrapper>
    </>
  )
})

export default Recommend
