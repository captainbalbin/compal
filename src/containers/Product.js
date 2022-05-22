import { useState, useEffect } from 'react'
import Overview from '../components/Overview/Overview'
import OverviewMobile from '../components/Overview/OverviewMobile'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import StoreListItem from '../components/StoreListItem'
import StoreList from '../components/StoreList'

const Product = ({ product }) => {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0])
  const breakpointMd = useMediaQuery(breakpoints.medium)

  const handleClick = (e) => {
    if (currentVariant.id !== e.target.value) {
      const selectedVariant = product.variants.find((variant) => variant.id === e.target.value)
      setCurrentVariant(selectedVariant)
    }
  }

  useEffect(() => {
    setCurrentVariant(product.variants[0])
  }, [product])

  return (
    <div className="flex-1 w-full flex flex-col place-items-center bg-zinc-900">
      {breakpointMd ? (
        <OverviewMobile product={product} currentVariant={currentVariant} onClick={handleClick} />
      ) : (
        <Overview product={product} currentVariant={currentVariant} onClick={handleClick} />
      )}
      <StoreList>
        {currentVariant.vendors.map((vendor) => (
          <StoreListItem key={vendor.name} vendor={vendor} />
        ))}
      </StoreList>
    </div>
  )
}

export default Product
