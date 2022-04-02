import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '../SearchBar'
import Nav from '../Nav'

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center bg-zinc-900">
      <Link href="/">
        <a className="hover:underline">
          <Image
            src="/compal_thick(1).png"
            alt="compal-logo"
            width="156"
            height="40"
          />
        </a>
      </Link>
    </div>
  )
}

export default Header
