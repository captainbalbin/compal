import Link from 'next/link'

const Nav = () => {
  return (
    <div className="bg-white">
      <Link href="/about">
        <a className="flex-none hover:underline">Login</a>
      </Link>
    </div>
  )
}
export default Nav
