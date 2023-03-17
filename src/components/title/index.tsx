import React, { FC, memo, ReactNode } from 'react'
import { CrownOutlined, SwapRightOutlined } from '@ant-design/icons'
import { TitleWrapper } from './style'
import { NavLink } from 'react-router-dom'

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
                <span className="text">{item}</span>
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
