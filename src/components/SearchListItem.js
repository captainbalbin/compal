import { useRouter } from 'next/router'
import { useKeyPress } from '../hooks/useKeyPress'

const SearchListItem = ({ item, setIsDropdownOpen }) => {
  const router = useRouter()
  const enterPress = useKeyPress('Enter')

  const handleClick = () => {
    setIsDropdownOpen(false)
    router.push({
      pathname: `/switches/${item.productId}`,
      query: `variant=${item.id}`,
    })
  }

  const handleKeyPress = () => {
    if (enterPress) {
      setIsDropdownOpen(false)
      router.push({
        pathname: `/switches/${item.productId}`,
        query: `variant=${item.variants[0].id}`,
      })
    }
  }

  return (
    <div
      className="cursor-pointer hover:bg-sky-700 p-4 focus:outline-none focus:bg-sky-700"
      onClick={() => handleClick()}
      tabIndex={0}
      onKeyPress={() => handleKeyPress()}
    >
      <p>{item.name}</p>
    </div>
  )
}

export default SearchListItem
