import { useRef, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import ListItem from './ListItem'
import filterData from '../utils/filterData'
import SearchButton from './SearchButton'

const testData = [
  { id: 1, type: 'switches', name: 'x name', url: 'abc123' },
  { id: 2, type: 'switches', name: 'aa name', url: 'abc1234' },
  { id: 3, type: 'switches', name: 'c name', url: 'abcd1234' },
  { id: 4, type: 'switches', name: 'd name', url: 'abcd12345' },
]

const SearchBar = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const router = useRouter()
  const ref = useRef([])
  const [inputValue, setInputValue] = useState('')
  const results = filterData(testData, inputValue)

  const listener = useCallback(
    (event) => {
      if (event.key === 'Escape' && isDropdownOpen) setIsDropdownOpen(false)

      if (
        !ref.current.contains(event.target) &&
        event.target.id !== 'list-result' &&
        isDropdownOpen &&
        !!results.length
      )
        setIsDropdownOpen(false)
    },
    [isDropdownOpen, setIsDropdownOpen, results]
  )

  const handleFocus = () => {
    if (!!inputValue && !isDropdownOpen) {
      setIsDropdownOpen(true)
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
    if (!!e.target.value && !isDropdownOpen) setIsDropdownOpen(true)
    if (!e.target.value && isDropdownOpen) setIsDropdownOpen(false)
  }

  const handleClick = () => {
    if (!isDropdownOpen) setIsDropdownOpen(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push({ pathname: 'search', query: { q: inputValue } })

    // TODO: Turn this function into async an include db call for searched query, but with fuzzy completionz
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
      <div>
        <form className="flex bg-zinc-800 rounded-md" onSubmit={handleSubmit}>
          <input
            className="flex-1 h-12 bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-l-md text-lg tracking-wide shadow-md placeholder:font-normal placeholder:text-zinc-400"
            id="search"
            type="text"
            placeholder="Search for parts"
            ref={ref}
            tabIndex={1}
            onChange={(e) => handleChange(e)}
            onFocus={handleFocus}
            onClick={handleClick}
            autoComplete="off"
          />
          <SearchButton text="Search" />
        </form>
      </div>

      {isDropdownOpen && (
        <div className="absolute flex flex-col bg-zinc-800 w-full h-128 mt-2 rounded-md z-50 tracking-wide shadow-md">
          {results.map((result, i) => {
            return <ListItem key={result.id} tab={i + 1} result={result} />
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
