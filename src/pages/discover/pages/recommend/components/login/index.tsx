import React, { FC, memo, ReactNode } from 'react'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = memo(() => {
  return (
    <Wrapper>
      <div className="info">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="btn">用户登录</div>
    </Wrapper>
  )
})

export default Login
