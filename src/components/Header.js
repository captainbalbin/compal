import Link from 'next/link'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const Header = () => {
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <div className="w-full flex justify-center bg-zinc-900">
      <Link href="/" passHref>
        <div
          className={`flex place-items-center text-zinc-100 font-footer rounded-md  hover:cursor-pointer mt-4 ${
            breakpointSm ? 'text-2xl p-2' : 'text-4xl p-4'
          }`}
        >
          <h1>Switchup</h1>
        </div>
      </Link>
    </div>
  )
}

export default Header
