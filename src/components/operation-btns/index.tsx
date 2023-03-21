import React, { FC, memo, ReactNode } from 'react'
import {
  CloudDownloadOutlined,
  CommentOutlined,
  PlayCircleOutlined,
  PlusSquareOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import { Wrapper } from './style'
import { formatCount } from '@/utils/format'

interface IProps {
  children?: ReactNode
  data: {
    subcribe?: number
    shared?: number
    commend?: number
  }
  onPlayBtnClick?: () => void
}

const OperationBtns: FC<IProps> = ({ data, onPlayBtnClick }) => {
  return (
    <Wrapper>
      <div className="info">
        <span
          className="btn"
          onClick={() => {
            onPlayBtnClick && onPlayBtnClick()
          }}
        >
          <PlayCircleOutlined />
          播放
        </span>
        <span className="btn">
          <PlusSquareOutlined />({formatCount(data.subcribe || 0)})
        </span>
        <span className="btn">
          <ShareAltOutlined />({formatCount(data.shared || 0)})
        </span>
        <span className="btn">
          <CloudDownloadOutlined />
          下载
        </span>
        <span className="btn">
          <CommentOutlined />({formatCount(data.commend || 0)})
        </span>
      </div>
    </Wrapper>
  )
}

export default memo(OperationBtns)
