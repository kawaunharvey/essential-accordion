import { useCallback, useEffect, useState } from 'react'

export const useHeight = (ref, loaded) => {
  const [height, setHeight] = useState(undefined)

  const calculateHeight = useCallback(() => {
    if (loaded && ref && ref.current) {
      const { height } = ref.current.getBoundingClientRect()
      setHeight(height)
    }
  }, [ref, loaded])

  useEffect(() => {
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [calculateHeight])

  return height
}
