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
          ? 'pl-4 pr-4'
          : breakpointMd
          ? 'pl-10 pr-10'
          : breakpointLg
          ? 'pl-24 pr-24'
          : 'pl-48 pr-48'
      } bg-zinc-900 text-zinc-100`}
    >
      {children}
    </div>
  )
}

export default PageWrapper
