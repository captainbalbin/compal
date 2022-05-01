import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex place-items-center text-zinc-100 font-footer rounded-md p-2 hover:cursor-pointer text-2xl hover:bg-sky-700">
        Switchup
      </div>
    </Link>
  )
}

export default Logo
