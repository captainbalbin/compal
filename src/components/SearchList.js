import ListItem from './SearchListItem'

const SearchList = ({ items, setIsDropdownOpen, fixed = false }) => {
  return (
    <div
      className={`${
        fixed ? 'absolute' : ''
      } flex flex-col bg-zinc-800 w-full h-128 z-50 rounded-b-md overflow-hidden shadow-2xl`}
    >
      {items.map((item) => {
        return <ListItem key={item.id} item={item} setIsDropdownOpen={setIsDropdownOpen} />
      })}
    </div>
  )
}

export default SearchList
