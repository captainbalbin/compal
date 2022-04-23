import { FaSearch } from 'react-icons/fa'

const SearchButton = () => {
  return (
    <button
      className="bg-sky-700 text-zinc-50 h-12 justify-center pl-4 pr-4 rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
      type="submit"
    >
      <FaSearch size="16" />
    </button>
  )
}

export default SearchButton
