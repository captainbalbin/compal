import Overview from '../components/Overview'
import StoreList from '../components/StoreList'

const Product = () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-4 place-items-center max-w-7xl">
      <Overview />
      <StoreList />
    </div>
  )
}

export default Product
