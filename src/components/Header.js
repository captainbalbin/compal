import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center bg-zinc-900">
      <Link href="/">
        <a className="hover:underline">
          <Image src="/logo-w-bg.svg" alt="compal-logo" width="168" height="48" />
        </a>
      </Link>
    </div>
  )
}

export default Header
