import Link from 'next/link'
import { motion } from 'framer-motion'
// import { useTheme } from 'next-themes'

const Header = () => {
  // const { theme, setTheme } = useTheme()

  return (
    <div className="w-full flex justify-center bg-zinc-900">
      <Link href="/" passHref>
        <motion.div
          layoutId="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex place-items-center bg-sky-700 text-zinc-100 font-footer rounded-md p-4 hover:cursor-pointer mt-4"
        >
          <h1 className="text-4xl">COMPA</h1>
        </motion.div>
      </Link>
      {/* <button
        className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 absolute"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle dark mode
      </button> */}
    </div>
  )
}

export default Header
