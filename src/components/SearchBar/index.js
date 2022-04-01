import { useRef, useEffect } from 'react'
const SearchBar = () => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  return (
    <div className="w-full">
      <input
        className="w-full h-14 mb-auto bg-zinc-700 text-zinc-200 focus:outline-none p-4 rounded-md text-lg tracking-wide shadow-md"
        id="search"
        type="text"
        ref={searchInputRef}
      />
    </div>
  )
}

export default SearchBar
