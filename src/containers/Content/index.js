import Filters from '../Filters'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'

const Content = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBgBlur = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-1/2 h-1/2 mb-auto flex flex-col items-center justify-center">
      <SearchBar setOpen={toggleBgBlur} isOpen={isOpen} />
      <Filters filterType="switch" isBlurred={isOpen} />
    </div>
  )
}

export default Content
