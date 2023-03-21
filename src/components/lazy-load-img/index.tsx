import React, { FC, memo, ReactNode } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Image from '@/assets/img/image.png'

interface IProps {
  children?: ReactNode
  src: string
  alt?: string
  title?: string
}

const LazyLoadImg: FC<IProps> = ({ src, alt, title }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      title={title}
      placeholderSrc={Image}
    ></LazyLoadImage>
  )
}

export default memo(LazyLoadImg)
