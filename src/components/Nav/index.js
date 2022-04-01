import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <Link href="/about">
        <a className="flex-none hover:underline">About</a>
      </Link>
      <Link href="/contact">
        <a className="flex-none hover:underline">Contact</a>
      </Link>
    </>
  )
}
export default Nav
