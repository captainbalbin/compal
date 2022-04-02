import Filters from './Filters'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

const Content = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleBgBlur = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="w-1/2 h-1/2 mb-auto flex flex-col items-center justify-center">
      <SearchBar
        setIsDropdownOpen={toggleBgBlur}
        isDropdownOpen={isDropdownOpen}
      />
      <Filters filterType="switch" isVisible={isDropdownOpen} />
    </div>
  )
}

export default Content
