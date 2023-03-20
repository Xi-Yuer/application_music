import { Skeleton } from 'antd'
import React, { FC, memo, ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import DiscoverNav from './components/nav'

interface IProps {
  children?: ReactNode
}

const DisCover: FC<IProps> = () => {
  return (
    <div>
      <DiscoverNav />
      <Suspense fallback={<Skeleton />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(DisCover)
