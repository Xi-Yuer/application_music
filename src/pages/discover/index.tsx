import { useAppDispatch, useAppSelector } from '@/store'
import { chnageCount } from '@/store/modules/count'
import React, { FC, memo, ReactNode, Suspense } from 'react'
import { shallowEqual } from 'react-redux'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const DisCover: FC<IProps> = () => {
  const { count } = useAppSelector((state) => state.count, shallowEqual)
  const dispatch = useAppDispatch()
  const change = () => {
    dispatch(chnageCount())
  }
  return (
    <div>
      <button onClick={change}>➕</button>
      <h2>当前计数：{count}</h2>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(DisCover)
