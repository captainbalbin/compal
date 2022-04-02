import { useRef, useEffect, useState } from 'react'
const SearchBar = ({ isOpen, setOpen }) => {
  const searchInputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  const handleFocus = () => {
    if (!!inputValue && !isOpen) setOpen(true)
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
    if (!!e.target.value && !isOpen) setOpen(true)
    if (!!!e.target.value && isOpen) setOpen(false)
  }

  return (
    <div className="w-full gap-4 text-zinc-300 relative">
      <input
        className="w-full h-14 mb-auto bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-md text-lg tracking-wide shadow-md placeholder:font-light placeholder:text-zinc-400"
        id="search"
        type="text"
        placeholder="Search for parts"
        ref={searchInputRef}
        onChange={(e) => handleOnChange(e)}
        onBlur={() => (isOpen ? setOpen(!isOpen) : null)}
        onFocus={() => handleFocus()}
      />
      {isOpen && (
        <div className="absolute flex flex-col bg-zinc-800 w-full h-128 mt-2 p-4 rounded-md z-10 tracking-wide shadow-md">
          <div>element</div>
          <div>element</div>
          <div>element</div>
          <div>element</div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
