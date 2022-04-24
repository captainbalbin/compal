import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import SearchBar from './SearchBar'
import SearchButton from './SearchButton'

const HeaderAlt = () => {
  const breakpointLg = useMediaQuery(breakpoints.large)
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <div className="w-full p-4 flex justify-between place-items-center">
      <Link href="/" passHref>
        <motion.div
          layoutId="logo"
          className="flex place-items-center bg-sky-700 text-zinc-100 font-footer rounded-md p-2 hover:cursor-pointer"
        >
          <h1 className="text-2xl">COMPA</h1>
        </motion.div>
      </Link>
      <div className={breakpointLg ? 'w-96' : 'w-1/2'}>
        {breakpointSm ? <SearchButton /> : <SearchBar />}
      </div>
      <div />
    </div>
  )
}

export default HeaderAlt
