import Link from 'next/link'
import { useRouter } from 'next/router'

const ListItem = ({ result }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/${result.type}/${result.url}`)
  }

  return (
    <Link href={`/${result.type}/${result.url}`} passHref>
      <div
        className="cursor-pointer hover:opacity-70 hover:bg-zinc-900 p-4 focus:outline-none focus:placeholder:text-zinc-500 focus:bg-zinc-900"
        onClick={handleClick}
      >
        <p id="list-result">{result.name}</p>
      </div>
    </Link>
  )
}

export default ListItem
