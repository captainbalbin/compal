import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-4 text-zinc-500 gap-4">
      <p>Copyright © 2022</p>
      <Link href="https://github.com/captainbalbin/compal" passHref>
        <p className="font-footer cursor-pointer hover:text-zinc-400">captainbalbin</p>
      </Link>
      <div>|</div>
      <div className="flex gap-1">
        <p>{`Can't find what you're looking for?`}</p>
        <Link href="/submit" passHref>
          <p className="cursor-pointer hover:text-zinc-400">{`Request it here!`}</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
