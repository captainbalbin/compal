import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-4 text-zinc-500 gap-8">
      <div className="flex gap-2">
        <p>Copyright © 2022</p>
        <Link href="https://github.com/captainbalbin/switchup" passHref>
          <p className="font-footer cursor-pointer hover:text-zinc-400">Switchup</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
