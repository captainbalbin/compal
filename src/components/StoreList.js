import StoreListItem from './StoreListItem'

const StoreList = ({ entity }) => {
  const sortedStores = entity.stores.slice().sort((a, b) => (a.price > b.price ? 1 : -2))

  return (
    <div className="row-span-3 w-full max-w-7xl grid overflow-hidden gap-4 p-4">
      {sortedStores.map((store) => (
        <StoreListItem key={store.name} store={store} />
      ))}
    </div>
  )
}

export default StoreList
