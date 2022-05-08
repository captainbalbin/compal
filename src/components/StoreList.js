import StoreListItem from './StoreListItem'

const StoreList = ({ variant }) => {
  /* for some reason sorting the list here creates miss-match between
  client and server side rendering. No idea why. Should sort this some other way. */

  // const sortedStores = product.stores.slice().sort((a, b) => (a.price >= b.price ? 1 : -1))

  return (
    <div className="row-span-3 w-full max-w-7xl grid overflow-hidden gap-4 p-4">
      {variant.vendors.map((vendor) => (
        <StoreListItem key={vendor.name} store={vendor} />
      ))}
    </div>
  )
}

export default StoreList
