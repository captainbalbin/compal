import ListItem from './SearchListItem'

const SearchList = ({ items, setIsDropdownOpen }) => {
  return (
    <div className="absolute flex flex-col bg-zinc-800 w-full h-128 mt-2 rounded-md z-50 tracking-wide shadow-md overflow-hidden">
      {items.map((item) => {
        return <ListItem key={item.id} item={item} setIsDropdownOpen={setIsDropdownOpen} />
      })}
    </div>
  )
}

export default SearchList
