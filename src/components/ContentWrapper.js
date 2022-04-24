import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const ContentWrapper = ({ children }) => {
  const breakpointMd = useMediaQuery(breakpoints.medium)
  return (
    <div
      className={`${
        breakpointMd ? 'w-full' : 'w-full'
      } max-w-2xl mb-auto flex flex-col flex-1 items-center justify-center`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
