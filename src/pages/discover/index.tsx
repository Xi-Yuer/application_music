import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const DisCover = memo(() => {
  return (
    <div>
      <h2>DisCover</h2>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  )
})

export default DisCover
