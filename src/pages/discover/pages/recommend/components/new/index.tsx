import React, { createRef, FC, memo, ReactNode } from 'react'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'

import { CaroselItem, ContentWrapper } from './style'
import Title from '@/components/title'
import { CarouselRef } from 'antd/es/carousel'
import { useAppSelector } from '@/store'
import SongCoverV2 from '@/components/song-cover-v2'

interface IProps {
  children?: ReactNode
}

const New: FC<IProps> = memo(() => {
  const catouselRef = createRef<CarouselRef>()
  const { newAlbum } = useAppSelector((state) => state.recommend)
  const navData = {
    title: '新碟上架',
    moreLink: '/discover/album'
  }
  return (
    <div>
      <Title data={navData} />
      <ContentWrapper>
        <div className="left" onClick={() => catouselRef.current?.prev()}>
          <DoubleLeftOutlined />
        </div>
        <div className="center">
          <Carousel ref={catouselRef} dots={false} speed={2000}>
            <CaroselItem>
              {newAlbum.slice(0, 5).map((item) => {
                return <SongCoverV2 data={item} key={item.id} />
              })}
            </CaroselItem>
            <CaroselItem>
              {newAlbum.slice(5, 10).map((item) => {
                return <SongCoverV2 data={item} key={item.id} />
              })}
            </CaroselItem>
          </Carousel>
        </div>
        <div className="right" onClick={() => catouselRef.current?.next()}>
          <DoubleRightOutlined />
        </div>
      </ContentWrapper>
    </div>
  )
})

export default New
