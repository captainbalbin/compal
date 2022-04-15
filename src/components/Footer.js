import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-4 text-zinc-500 gap-4">
      <p>Copyright © 2022 captainbalbin</p>
      <div>|</div>
      <div className="flex gap-1">
        <p>{`Can't find what you're looking for?`}</p>
        <Link href="/submit">Add it here</Link>
      </div>
    </div>
  )
}

export default Footer
