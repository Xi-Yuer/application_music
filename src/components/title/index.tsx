import React, { FC, memo, ReactNode } from 'react'
import { CrownOutlined, SwapRightOutlined } from '@ant-design/icons'
import { TitleWrapper } from './style'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { changeCurrentCatAction } from '@/pages/discover/pages/songs/store'

interface IProps {
  children?: ReactNode
  data: {
    title?: string
    keywords?: string[]
    moreLink: string
  }
}

const Title: FC<IProps> = ({
  data: { title = '', keywords = [], moreLink = '/' }
}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleRouterJump = (item: string) => {
    dispatch(changeCurrentCatAction(item))
    navigate('/discover/songs')
  }
  return (
    <TitleWrapper>
      <div className="left">
        <span className="title">
          <CrownOutlined style={{ color: 'red', marginRight: '5px' }} />
          {title}
        </span>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="text" onClick={() => handleRouterJump(item)}>
                  {item}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <NavLink className="more" to={moreLink}>
          更多
          <SwapRightOutlined style={{ color: 'red' }} />
        </NavLink>
      </div>
    </TitleWrapper>
  )
}
export default memo(Title)
