import { useState, useEffect } from 'react'

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: null, height: null })

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimensions])

  return windowDimensions
}
