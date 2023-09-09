import { useRef, useState, useEffect, Children, useCallback } from 'react'
import { IItem } from './types'
import { useHeight } from './utils'

export const Item = ({ isOpen, children, ...props }: IItem) => {
  const itemParts = Children.toArray(children)
  const group = useRef<HTMLDivElement>(null)
  const groupHeader = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState<boolean>(isOpen)
  const maxHeight = useHeight(group, loaded)
  const minHeight = useHeight(groupHeader, loaded)
  const id = props.id || 'section-' + Math.random().toString(36).substr(2, 9)
  useEffect(() => {
    if (loaded) return
    setTimeout(() => setLoaded(true), 50)
  }, [loaded])

  const handleOpen = useCallback(() => {
    setOpen(!open)
  }, [open])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpen(!open)
    }
  }

  const [head, body] = itemParts
  return (
    <div
      style={{
        maxHeight: open ? maxHeight : minHeight,
        transition: 'max-height 0.1s ease',
        overflow: 'hidden',
      }}
      {...props}
    >
      <div ref={group}>
        <div ref={groupHeader} role="heading" aria-level={1}>
          <div
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls={id}
            onClick={handleOpen}
            onKeyDown={handleKeyPress}
          >
            {head}
          </div>
        </div>
        <div id={id}>{body}</div>
      </div>
    </div>
  )
}
