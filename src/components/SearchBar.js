import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import ListItem from './ListItem'
import filterData from '../utils/filterData'
import SearchButton from './SearchButton'
import { BiCommand } from 'react-icons/bi'

const testData = [
  { id: 1, type: 'switches', name: 'Gateron Yellow', url: 'gy90aj10923' },
  { id: 2, type: 'switches', name: 'Cherry MX Brown', url: 'cmxb0jlsl230' },
  { id: 3, type: 'switches', name: 'Tecsee Carrot', url: 'tc09kkksle' },
  { id: 4, type: 'switches', name: 'Marshmallow', url: 'm9127a777' },
]

const SearchBar = () => {
  const router = useRouter()
  const [inFocus, setInFocus] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
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
      router.push({ pathname: 'search', query: { q: inputValue } })
      // TODO: Turn this function into async an include db call for searched query, but with fuzzy completionz
    }
  }

  return (
    <motion.div
      layoutId="search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full gap-4 text-zinc-300 relative"
    >
      <div>
        <form
          className="flex place-items-center bg-zinc-800 rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-1 h-12 bg-zinc-800 focus:outline-none focus:placeholder:text-zinc-600 p-4 rounded-l-md text-lg tracking-wide shadow-md  placeholder:text-zinc-500"
            id="search"
            type="text"
            placeholder="Search switches here"
            // ref={ref}
            onChange={(e) => handleChange(e)}
            onFocus={handleFocus}
            onBlur={handleFocus}
            autoComplete="off"
          />
          {!inFocus && (
            <div className="flex place-items-center gap-1 border border-zinc-500 rounded-md p-1 pl-2 pr-2 mr-4">
              <BiCommand size="12" className="text-zinc-500" />
              <p className="text-xs text-zinc-500">K</p>
            </div>
          )}

          <SearchButton text="Search" />
        </form>
      </div>

      {isDropdownOpen && (
        <div className="absolute flex flex-col bg-zinc-800 w-full h-128 mt-2 rounded-md z-50 tracking-wide shadow-md">
          {results.map((result) => {
            return <ListItem key={result.id} result={result} />
          })}
        </div>
      )}
    </motion.div>
  )
}

export default SearchBar
