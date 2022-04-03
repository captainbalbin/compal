import { useRef, useEffect, useState, useCallback } from 'react'
import ListItem from './ListItem'
import filterData from '../utils/filterData'

const testData = [
  { id: 1, type: 'switches', name: 'a name', url: 'abc123' },
  { id: 2, type: 'switches', name: 'b name', url: 'abc1234' },
  { id: 3, type: 'deskmats', name: 'c name', url: 'abcd1234' },
  { id: 4, type: 'parts', name: 'd name', url: 'abcd12345' },
]

const SearchBar = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const ref = useRef([])
  const [inputValue, setInputValue] = useState('')
  const results = filterData(testData, inputValue)

  const listener = useCallback(
    (event) => {
      if (event.key === 'Escape' && isDropdownOpen) setIsDropdownOpen(false)

      if (
        !ref.current.contains(event.target) &&
        event.target.id !== 'list-result' &&
        isDropdownOpen
      )
        setIsDropdownOpen(false)
    },
    [isDropdownOpen, setIsDropdownOpen]
  )

  const handleFocus = () => {
    if (!!inputValue && !isDropdownOpen) {
      setIsDropdownOpen(true)
    }
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
    if (!!e.target.value && !isDropdownOpen) setIsDropdownOpen(true)
    if (!e.target.value && isDropdownOpen) setIsDropdownOpen(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', listener)
    window.addEventListener('mousedown', listener)
    window.addEventListener('touchstart', listener)

    return () => {
      window.removeEventListener('mousedown', listener)
      window.removeEventListener('touchstart', listener)
      window.removeEventListener('keydown', listener)
    }
  }, [ref, listener])

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div className="w-full gap-4 text-zinc-300 relative">
      <input
        className="w-full h-14 mb-auto bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-md text-lg tracking-wide shadow-md placeholder:font-light placeholder:text-zinc-400"
        id="search"
        type="text"
        placeholder="Search for parts"
        ref={ref}
        onChange={(e) => handleOnChange(e)}
        onFocus={() => handleFocus()}
      />
      {isDropdownOpen && (
        <div className="absolute flex flex-col bg-zinc-800 w-full h-128 mt-2 rounded-md z-10 tracking-wide shadow-md">
          {results.map((result) => (
            <ListItem key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
