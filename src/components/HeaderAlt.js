import Link from 'next/link'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import MenuButton from './MenuButton'
import SearchBar from './SearchBar'

const HeaderAlt = () => {
  const breakpointMd = useMediaQuery(breakpoints.medium)

  return (
    <div
      className={`w-full gap-2 grid ${
        breakpointMd
          ? 'grid-rows-1 grid-flow-row place-items-center'
          : 'grid-cols-4 grid-flow-col p-4'
      }`}
    >
      <Link href="/" passHref>
        <div className="flex place-items-center text-zinc-100 font-footer rounded-md p-2 hover:cursor-pointer">
          <h1 className="text-2xl">Swup</h1>
        </div>
      </Link>
      <div className={`${breakpointMd ? 'w-full flex gap-2' : 'col-span-2'}`}>
        <SearchBar />
        {breakpointMd && <MenuButton />}
      </div>
      {!breakpointMd && (
        <div className="col-span-1 flex place-content-end">
          <MenuButton />
        </div>
      )}
    </div>
  )
}

export default HeaderAlt
