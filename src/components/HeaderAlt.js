import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import SearchContainer from '../containers/SearchContainer'
import MenuButton from './MenuButton'
import Logo from './Logo'

const HeaderAlt = () => {
  const breakpointMd = useMediaQuery(breakpoints.medium)

  return (
    <div className="w-full flex justify-center border-b border-zinc-700">
      <div
        className={`w-full max-w-7xl gap-4 grid ${
          breakpointMd
            ? 'grid-rows-1 grid-flow-row place-items-center p-4'
            : 'grid-cols-4 grid-flow-col p-4'
        }`}
      >
        <div className="flex">
          <Logo />
        </div>
        <div
          className={`flex place-content-center ${
            breakpointMd ? 'w-full flex gap-2' : 'col-span-2'
          }`}
        >
          <SearchContainer />
          {breakpointMd && <MenuButton />}
        </div>
        {!breakpointMd && (
          <div className="flex place-content-end">
            <MenuButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderAlt
