import React, { FC, memo, ReactNode, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AutoTop: FC<IProps> = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return <>{children}</>
}

export default memo(AutoTop)
