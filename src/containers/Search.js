import { useRef, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

import filterData from '../utils/filterData'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import { testData } from '../utils/testData'

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inFocus, setInFocus] = useState(false) // not sure if both ref and this is needed
  const router = useRouter()
  const ref = useRef(null)

  const results = filterData(testData, inputValue)

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
    <div className="w-full max-w-2xl gap-4 text-zinc-100 place-content-center relative">
      <div>
        <SearchBar
          isDropdownOpen={isDropdownOpen}
          reference={ref}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          onSubmit={handleSubmit}
          inFocus={inFocus}
        />
      </div>

      {isDropdownOpen && (
        <SearchList absolute items={results} setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </div>
  )
}

export default Search
