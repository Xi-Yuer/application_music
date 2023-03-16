import React, { FC, memo, ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const DisCover: FC<IProps> = () => {
  return (
    <div>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(DisCover)
