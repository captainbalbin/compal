import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import Search from '../containers/Search'
import MenuButton from './MenuButton'
import Logo from './Logo'

const HeaderAlt = () => {
  const breakpointMd = useMediaQuery(breakpoints.medium)

  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full max-w-6xl gap-4 grid p-4 ${
          breakpointMd
            ? 'grid-rows-1 grid-flow-row place-items-center'
            : 'grid-cols-4 grid-flow-col'
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
          <Search />
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
