import { useEffect, useCallback, useState } from 'react'

export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPress] = useState(false)

  const handleKeyDown = useCallback(
    ({ key }) => {
      if (key === targetKey) setKeyPress(true)
    },
    [targetKey]
  )

  const handleKeyUp = useCallback(
    ({ key }) => {
      if (key === targetKey) setKeyPress(true)
    },
    [targetKey]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return keyPressed
}
