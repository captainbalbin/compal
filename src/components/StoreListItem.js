import { FaChevronRight } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md'
import { useMediaQuery } from '../hooks/useMediaQuery'
import Rating from './Rating'
import { breakpoints, VARIANT } from '../utils/constants'

const StoreListItem = ({ store }) => {
  const breakpointSm = useMediaQuery(breakpoints.small)

  return (
    <a href={`${store.url}`} target="_blank" rel="noopener noreferrer">
      <div
        key={store.name}
        className="w-full bg-zinc-700 bg-opacity-30 flex gap-4 rounded-md overflow-hidden hover:cursor-pointer hover:bg-zinc-700 hover:bg-opacity-25"
        tabIndex={1}
      >
        <div className="flex w-full gap-4 items-center">
          <div className="bg-sky-700 w-16 h-16 rounded-md ">{/* Add logos here */}</div>
          <div className="flex gap-2 items-center">
            {store.name}
            {store.rating && <Rating entity={store} size="small" />}
          </div>
        </div>
        <div className="flex flex-row items-center mr-4 gap-8">
          {store.purchaseQuantity && !breakpointSm && (
            <div className="flex flex-row items-center whitespace-nowrap">
              <p className="text-zinc-400">
                {VARIANT.PURCHASE_QUANTITY}: {store.purchaseQuantity}
              </p>
            </div>
          )}
          {store.shipping && (
            <div className="flex gap-1 text-zinc-400">
              <MdLocalShipping />
              <p className="text-xs font-semibold">{store.shipping}</p>
            </div>
          )}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="font-bold text-base">
              {VARIANT.EURO}
              {store.price}
            </p>
            <p className="font-light text-zinc-400">{VARIANT.PER_SWITCH}</p>
          </div>
          <FaChevronRight size={18} />
        </div>
      </div>
    </a>
  )
}

export default StoreListItem
