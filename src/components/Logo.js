import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex place-items-center bg-sky-700 text-zinc-50 font-footer rounded-md p-2 hover:cursor-pointer text-2xl hover:bg-sky-600 hover:text-white">
        Switchup
      </div>
    </Link>
  )
}

export default Logo
