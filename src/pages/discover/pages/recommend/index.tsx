import request from '@/service'
import React, { FC, memo, ReactNode } from 'react'
import { useEffect } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  useEffect(() => {
    request.get({ url: '/banner' }).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Recommend</div>
})

export default Recommend
