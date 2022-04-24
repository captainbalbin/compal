import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const ContentWrapper = ({ children }) => {
  const breakpointMd = useMediaQuery(breakpoints.medium)
  return (
    <div
      className={`${
        breakpointMd ? 'w-full' : 'w-full'
      } max-w-2xl h-1/2 mb-auto flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
