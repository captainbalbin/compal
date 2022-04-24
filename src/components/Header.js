import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const Header = () => {
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <div className="w-full flex justify-center bg-zinc-900">
      <Link href="/" passHref>
        <motion.div
          layoutId="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`flex place-items-center bg-sky-700 text-zinc-100 font-footer rounded-md  hover:cursor-pointer mt-4 ${
            breakpointSm ? 'text-2xl p-2' : 'text-4xl p-4'
          }`}
        >
          <h1>COMPA</h1>
        </motion.div>
      </Link>
    </div>
  )
}

export default Header
