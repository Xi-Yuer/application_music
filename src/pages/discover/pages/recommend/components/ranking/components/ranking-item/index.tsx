import React, { FC, memo, ReactNode } from 'react'
import { DoubleRightOutlined, PlayCircleOutlined } from '@ant-design/icons'

import { formatImg } from '@/utils/format'
import { Playlist } from '../../../../store/type'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
  data: Playlist | null
}

const RangkingItem: FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="header">
        <div className="image">
          <img src={formatImg(data?.coverImgUrl, 80, 80)} alt="" />
          <div className="cover"></div>
        </div>
        <div className="info">
          <h3 className="name">{data?.name}</h3>
          <div>
            <span className="btn play"></span>
            <span className="btn favor"></span>
          </div>
        </div>
      </div>
      <div className="list">
        {data?.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div
                className="index"
                style={index <= 2 ? { color: 'red' } : undefined}
              >
                {index + 1}
              </div>
              <div className="icon">
                <PlayCircleOutlined style={{ color: 'gray' }} />
              </div>
              <div className="name">{item.name}</div>
            </div>
          )
        })}
      </div>
      <div className="footer" style={{ textAlign: 'right', cursor: 'pointer' }}>
        <span>
          查看更多
          <DoubleRightOutlined />
        </span>
      </div>
    </Wrapper>
  )
}

export default memo(RangkingItem)
