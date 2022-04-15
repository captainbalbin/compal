import Link from 'next/link'

const Header = () => {
  return (
    <div className="w-full h-24 grid place-items-center bg-zinc-900 relative">
      <Link href="/" passHref>
        <div className="grid place-items-center bg-zinc-100 text-zinc-900 font-footer rounded-sm p-2 hover:cursor-pointer mt-4">
          <h1 className="text-4xl pb-1">COMPAL</h1>
        </div>
      </Link>
      <div className="grid grid-flow-col">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  )
}

export default Header
