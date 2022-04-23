import Link from 'next/link'
// import { useTheme } from 'next-themes'

const Header = () => {
  // const { theme, setTheme } = useTheme()

  return (
    <div className="w-full h-24 flex justify-center bg-zinc-900">
      <Link href="/" passHref>
        <div className="flex place-items-center bg-sky-700 text-zinc-100 font-footer rounded-md pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer mt-4">
          <h1 className="text-4xl pb-1">COMPA</h1>
        </div>
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
