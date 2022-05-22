import { useState } from 'react'
import filterData from '../utils/filterData'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'
import { testData } from '../utils/testData'

const SearchContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const results = filterData(testData, inputValue)

  return (
    <div className="w-full max-w-2xl gap-4 text-zinc-100 place-content-center relative">
      <div>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>

      {isDropdownOpen && (
        <SearchList absolute items={results} setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </div>
  )
}

export default SearchContainer
