import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const OptionsDropdown = ({ weights }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedWeight, setSelectedWeight] = useState(weights[0])

  // const handleSelect = (e) => {
  //   setSelectedWeight('poop')
  //   setIsOpen(false)
  // }

  return (
    <div className="flex flex-col w-min">
      <div
        className="flex items-center gap-2 p-2 text-sm bg-zinc-800 rounded-md hover:bg-zinc-800 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onAbort={() => setIsOpen(false)}
      >
        {`${selectedWeight}`}
        <FaChevronDown size={14} />
      </div>
      {isOpen && (
        <div className="bg-red-500 ">
          {weights.map((weight, i) => {
            return <div key={i}>{weight}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default OptionsDropdown
