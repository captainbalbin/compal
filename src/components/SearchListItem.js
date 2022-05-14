import Link from 'next/link'
import { useRouter } from 'next/router'
import { useKeyPress } from '../hooks/useKeyPress'

const SearchListItem = ({ item, setIsDropdownOpen }) => {
  const router = useRouter()
  const enterPress = useKeyPress('Enter')

  const handleClick = () => {
    setIsDropdownOpen(false)
    router.push(`/${item.type}/${item.url}`)
  }

  const handleKeyPress = () => {
    if (enterPress) {
      setIsDropdownOpen(false)
      router.push(`/${item.type}/${item.url}`)
    }
  }

  return (
    <Link href={`/${item.type}/${item.url}`} passHref>
      <div
        className="cursor-pointer hover:bg-sky-700 p-4 focus:outline-none focus:bg-sky-700"
        onClick={() => handleClick()}
        tabIndex={0}
        onKeyPress={() => handleKeyPress()}
      >
        <p id="list-item">{item.name}</p>
      </div>
    </Link>
  )
}

export default SearchListItem
