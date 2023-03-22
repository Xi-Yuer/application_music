import OperationBtns from '@/components/operation-btns'
import React, { FC, memo, ReactNode, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAlbumDetail } from './service'
import { Wrapper, WrapperLeft, WrapperRight } from './style'

interface IProps {
  children?: ReactNode
}

const AlbumDetail: FC<IProps> = memo(() => {
  const { id } = useParams()
  useEffect(() => {
    if (!id) return
    getAlbumDetail(id).then((res) => {
      console.log(res)
    })
  }, [id])

  return (
    <Wrapper>
      <WrapperLeft>
        <div className="info">
          <div className="top">
            <div className="left">
              <img src="" alt="" />
            </div>
            <div className="right">
              <div className="name"></div>
              <div className="creator"></div>
              <OperationBtns data={{}} />
            </div>
          </div>
          <div className="bot"></div>
        </div>
      </WrapperLeft>
      <WrapperRight></WrapperRight>
    </Wrapper>
  )
})

export default AlbumDetail
