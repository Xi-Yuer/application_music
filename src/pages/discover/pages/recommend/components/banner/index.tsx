import React, { createRef, FC, memo, ReactNode, useState } from 'react'
import { shallowEqual } from 'react-redux'

import { Carousel } from 'antd'

import { useAppSelector } from '@/store'

import {
  BannderControl,
  BannderLeft,
  BannderRight,
  BannderWrapper
} from './style'
import { CarouselRef } from 'antd/es/carousel'
import LazyLoadImg from '@/components/lazy-load-img'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = memo(() => {
  const { banners } = useAppSelector((state) => state.recommend, shallowEqual)

  const carouselRef = createRef<CarouselRef>()

  const [index, setIndex] = useState(0)

  const onChange = (currentSlide: number) => {
    setIndex(currentSlide)
  }

  return (
    <BannderWrapper bgUrl={banners?.[index]?.imageUrl}>
      <div className="content">
        <BannderLeft>
          <Carousel
            afterChange={onChange}
            autoplay
            ref={carouselRef}
            effect="fade"
          >
            {banners?.map((item) => (
              <div className="item" key={item.imageUrl}>
                <LazyLoadImg
                  src={item.imageUrl}
                  alt={item.typeTitle}
                  title={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannderLeft>
        <BannderControl>
          <div
            className="btn left"
            onClick={() => carouselRef.current?.prev()}
          ></div>
          <div
            className="btn right"
            onClick={() => carouselRef.current?.next()}
          ></div>
        </BannderControl>
        <BannderRight>
          <LazyLoadImg src={require('@/assets/img/download.png')} alt="" />
        </BannderRight>
      </div>
    </BannderWrapper>
  )
})

export default Banner
