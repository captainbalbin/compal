import Link from 'next/link'
import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

const HeaderAlt = () => {
  return (
    <div className="w-full p-4 flex justify-between  place-items-center">
      <Link href="/" passHref>
        <motion.div
          layoutId="logo"
          className="flex place-items-center bg-sky-700 text-zinc-100 font-footer rounded-md p-4 hover:cursor-pointer"
        >
          <h1 className="text-4xl">COMPA</h1>
        </motion.div>
      </Link>
      <div className="w-1/2">
        <SearchBar />
      </div>
      <div />
    </div>
  )
}

export default HeaderAlt
