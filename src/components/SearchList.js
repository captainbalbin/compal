import ListItem from './SearchListItem'

const SearchList = ({ items, setIsDropdownOpen, absolute = false }) => {
  return (
    <div
      className={`${
        absolute ? 'absolute rounded-b-md shadow-2xl z-50' : 'rounded-md'
      } flex flex-col bg-zinc-800 w-full h-128 overflow-hidden`}
    >
      {items.map((item) => {
        return <ListItem key={item.productId} item={item} setIsDropdownOpen={setIsDropdownOpen} />
      })}
    </div>
  )
}

export default SearchList
