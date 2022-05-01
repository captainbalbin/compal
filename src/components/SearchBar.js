import { useRouter } from 'next/router'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import SearchShortcut from './SearchShortcut'
import SearchButton from './SearchButton'

const SearchBar = ({ isDropdownOpen, setIsDropdownOpen, inputValue, setInputValue }) => {
  const router = useRouter()
  const ref = useRef(null)
  const [inFocus, setInFocus] = useState(false) // not sure if both ref and this is needed
  const breakpointSm = useMediaQuery(breakpoints.small)

  const handleFocus = () => {
    setInFocus(!inFocus)
    if (inputValue && !isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
    if (e.target.value && !isDropdownOpen) setIsDropdownOpen(true)
    if (!e.target.value && isDropdownOpen) setIsDropdownOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue) {
      router.push({ pathname: '/search', query: { q: inputValue } })
      ref.current.blur()
      setIsDropdownOpen(false)
      // TODO: Turn this function into async an include db call for searched query, but with fuzzy completionz
    }
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === '/') {
        event.preventDefault()
        ref.current.focus()
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        ref.current.blur()
        setIsDropdownOpen(false)
      }
    },
    [ref, setIsDropdownOpen]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <form className="flex place-items-center w-full bg-zinc-800 rounded-md" onSubmit={handleSubmit}>
      <input
        className="w-full h-12 bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-l-md text-md tracking-wide shadow-sm placeholder:text-zinc-500 row-span-1"
        id="search"
        type="text"
        placeholder="Search switches here"
        ref={ref}
        onChange={(e) => handleChange(e)}
        onFocus={handleFocus}
        onBlur={handleFocus}
        autoComplete="off"
      />
      {!breakpointSm && <SearchShortcut inFocus={inFocus} />}

      <SearchButton text="Search" />
    </form>
  )
}

export default SearchBar
