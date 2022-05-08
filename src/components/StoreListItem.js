import { FaChevronRight } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
import Rating from './Rating'

const StoreListItem = ({ store }) => {
  return (
    <a href={`${store.url}`} target="_blank" rel="noopener noreferrer">
      <div
        key={store.name}
        className="w-full bg-zinc-800 bg-opacity-30 flex gap-4 rounded-md overflow-hidden hover:cursor-pointer hover:bg-zinc-700 hover:bg-opacity-25"
      >
        <div className="flex w-full gap-4 items-center">
          <div className="bg-sky-700 w-16 h-16 rounded-md "></div>
          <div className="flex gap-2 items-center">
            {store.name}
            {store.rating && <Rating entity={store} size="small" />}
          </div>
        </div>
        <div className="flex items-center mr-4 gap-4 font-bold">
          {store.shipping && (
            <div className="flex gap-1 text-zinc-400">
              <MdLocalShipping />
              <p className="text-xs font-semibold">{store.shipping}</p>
            </div>
          )}
          {store.price}
          <FaChevronRight size={18} />
        </div>
      </div>
    </a>
  )
}

export default StoreListItem
