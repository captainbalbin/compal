import { useState } from 'react'
import filterData from '../utils/filterData'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'

const testData = [
  { id: 1, type: 'switches', name: 'Gateron Yellow', url: 'gy90aj10923' },
  { id: 2, type: 'switches', name: 'Cherry MX Brown', url: 'cmxb0jlsl230' },
  { id: 3, type: 'switches', name: 'Tecsee Carrot', url: 'tc09kkksle' },
  { id: 4, type: 'switches', name: 'Marshmallow', url: 'm9127a777' },
]

const SearchContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const results = filterData(testData, inputValue)

  return (
    <div className="w-full max-w-2xl gap-4 text-zinc-300 place-content-center relative">
      <div>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>

      {isDropdownOpen && <SearchList items={results} setIsDropdownOpen={setIsDropdownOpen} />}
    </div>
  )
}

export default SearchContainer
