import { useAppDispatch } from '@/store'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import Banner from './components/banner'
import { fetchBannderDataAction } from './store'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  // 请求数据
  useEffect(() => {
    dispatch(fetchBannderDataAction())
  }, [])

  return (
    <>
      <Banner />
    </>
  )
})

export default Recommend
