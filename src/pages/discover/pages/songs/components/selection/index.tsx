import { useAppSelector } from '@/store'
import React, { FC, memo, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrentCatAction } from '../../store'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Selection: FC<IProps> = memo(() => {
  const { catlist } = useAppSelector((state) => state.playlist)
  const dispatch = useDispatch()

  const handleTypeItemclick = (type: string) => {
    dispatch(changeCurrentCatAction(type))
  }
  return (
    <Wrapper>
      <div className="top">全部风格</div>
      <div className="cats">
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <div className="cat" key={item}>
              <>
                <div className="type">{catlist?.categories[item]}</div>
                <div className="typegroup">
                  {catlist?.sub.map((iten) => {
                    return iten.category === item ? (
                      <div
                        key={iten.name}
                        className="type-item"
                        onClick={() => handleTypeItemclick(iten.name)}
                      >
                        <span>{iten.name}</span>
                        <span className="line">|</span>
                      </div>
                    ) : null
                  })}
                </div>
              </>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
})

export default Selection
