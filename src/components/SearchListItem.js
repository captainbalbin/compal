import Link from 'next/link'
import { useRouter } from 'next/router'

const SearchListItem = ({ item, setIsDropdownOpen }) => {
  const router = useRouter()

  const handleClick = () => {
    setIsDropdownOpen(false)
    router.push(`/${item.type}/${item.url}`)
  }

  return (
    <Link href={`/${item.type}/${item.url}`} passHref>
      <div
        className="cursor-pointer hover:bg-sky-700 p-4 focus:outline-none focus:placeholder:text-zinc-500 focus:bg-zinc-900"
        onClick={handleClick}
      >
        <p id="list-item">{item.name}</p>
      </div>
    </Link>
  )
}

export default SearchListItem
