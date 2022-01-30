import Link from 'next/link'

const Header = () => {
  return (
    <div className="relative bg-zinc-900">
      <h1>I am a header</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Header
