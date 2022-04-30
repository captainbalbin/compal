import { FaBars } from 'react-icons/fa'

const MenuButton = () => {
  return (
    <button
      className="bg-zinc-800 text-zinc-50 h-12 justify-center pl-4 pr-4 rounded-md shadow-md hover:bg-sky-700 focus:outline-none focus:bg-sky-600"
      type="submit"
    >
      <FaBars size="16" />
    </button>
  )
}

export default MenuButton
