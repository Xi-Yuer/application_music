import React, { FC, ReactNode, useEffect, useRef } from 'react'

interface IProps {
  children?: ReactNode
  onOutsideClick: () => void
}

const OutsideClickHandler: FC<IProps> = ({ onOutsideClick, children }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onOutsideClick])

  return <div ref={ref}>{children}</div>
}

export default OutsideClickHandler
