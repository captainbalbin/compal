import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const PageWrapper = ({ children }) => {
  const breakpointLg = useMediaQuery(breakpoints.large)
  const breakpointMd = useMediaQuery(breakpoints.medium)
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <div
      className={`flex flex-col items-center h-screen ${
        breakpointSm
          ? 'pl-8 pr-8'
          : breakpointMd
          ? 'pl-16 pr-16'
          : breakpointLg
          ? 'pl-32 pr-32'
          : 'pl-64 pr-64'
      } bg-zinc-900 text-zinc-100`}
    >
      {children}
    </div>
  )
}

export default PageWrapper
