import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import SearchShortcut from './SearchShortcut'
import SearchButton from './SearchButton'

const SearchBar = ({ isDropdownOpen, reference, onChange, onFocus, onBlur, onSubmit, inFocus }) => {
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <form
      className={`flex place-items-center w-full border-b ${
        isDropdownOpen ? 'rounded-t-md border-zinc-700' : 'rounded-md border-transparent'
      } bg-zinc-800`}
      onSubmit={onSubmit}
    >
      <input
        className="w-full h-12 bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-l-md text-md tracking-wide shadow-sm placeholder:text-zinc-500 row-span-1"
        id="search"
        type="text"
        placeholder="Search switches here"
        ref={reference}
        onChange={(e) => onChange(e)}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        tabIndex={-1}
      />
      {!breakpointSm && <SearchShortcut inFocus={inFocus} />}

      <SearchButton text="Search" />
    </form>
  )
}

export default SearchBar
