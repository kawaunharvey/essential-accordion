import { useRef, useState, useEffect, useCallback, Children } from 'react'
import { IItem } from './types'

export const Item = ({ isOpen, handleOpen, children, ...props }: IItem) => {
  const itemParts = Children.toArray(children)
  const group = useRef<HTMLDivElement>(null)
  const groupHeader = useRef<HTMLButtonElement>(null)
  const [height, setHeight] = useState<number>()
  const [state, setState] = useState<{
    originalHeight: number
    headerHeight: number
  }>()

  useEffect(() => {
    if (group.current && groupHeader.current) {
      const g = group.current.clientHeight
      const h = groupHeader.current.clientHeight
      setState({
        originalHeight: g,
        headerHeight: h,
      })
    }
  }, [])

  useEffect(
    () =>
      state && setHeight(isOpen ? state?.originalHeight : state?.headerHeight),
    [state, isOpen]
  )

  const handleClick = useCallback(() => {
    handleOpen()
    setHeight(isOpen ? state?.originalHeight : state?.headerHeight)
  }, [handleOpen, isOpen])

  const [head, body] = itemParts
  return (
    <div
      id="group"
      ref={group}
      style={{
        height: state?.originalHeight,
        maxHeight: height,
        transition: 'max-height 0.2s linear',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      {...props}
    >
      <button
        onClick={handleClick}
        style={{
          margin: 0,
          padding: 0,
          border: 'none',
          background: 'none',
          boxSizing: 'border-box',
          width: '100%',
          textAlign: 'left',
        }}
        ref={groupHeader}
        aria-expanded={isOpen}
      >
        {head}
      </button>
      {body}
    </div>
  )
}
