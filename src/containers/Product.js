import { useState } from 'react'
import { useRouter } from 'next/router'
import Overview from '../components/Overview/Overview'
import OverviewMobile from '../components/Overview/OverviewMobile'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const Product = ({ product }) => {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0])
  const breakpointMd = useMediaQuery(breakpoints.medium)
  const router = useRouter()
  const { query } = router

  const handleClick = (e) => {
    if (currentVariant !== e.target.value) {
      const selectedVariant = product.variants.find((variant) => variant.id === e.target.value)
      setCurrentVariant(selectedVariant)

      router.push({ pathname: query.id, query: `variant=${e.target.value}` })
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col place-items-center bg-zinc-900">
      {breakpointMd ? (
        <OverviewMobile product={product} currentVariant={currentVariant} onClick={handleClick} />
      ) : (
        <Overview product={product} currentVariant={currentVariant} onClick={handleClick} />
      )}
    </div>
  )
}

export default Product
