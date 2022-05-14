import { FaSearch } from 'react-icons/fa'

const SearchButton = () => {
  return (
    <button
      className="text-zinc-50 h-12 justify-center pl-4 pr-4 rounded-md hover:bg-sky-600 focus:outline-none"
      type="submit"
      tabIndex={1}
    >
      <FaSearch size="16" />
    </button>
  )
}

export default SearchButton
