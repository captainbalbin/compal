import Image from 'next/image'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { breakpoints } from '../../utils/constants'
import OverviewTable from './OverviewTable'
import Heading from './Heading'
import Variant from './Variant'
import StoreListItem from '../StoreListItem'

const Overview = ({ product, currentVariant, onClick }) => {
  const breakpointMd = useMediaQuery(breakpoints.medium)

  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-700 bg-opacity-20 p-4">
        <div className="md:flex w-full gap-8 max-w-6xl p-4">
          <div className="flex gap-8 p-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
              alt="Switch"
              height={144}
              width={144}
              layout={'fixed'}
            />
            {breakpointMd && <Heading product={product} />}
          </div>
          <div className="flex flex-row gap-8 w-full">
            <div className="w-full flex flex-col gap-4">
              {!breakpointMd && <Heading product={product} />}
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <Variant
                    key={variant.id}
                    indicator={variant.id}
                    onClick={onClick}
                    selected={currentVariant.id === variant.id}
                  />
                ))}
              </div>
              <p className="text-zinc-300">{currentVariant.description}</p>
            </div>
            <OverviewTable details={currentVariant} />
          </div>
        </div>
      </div>
      <div className="row-span-3 w-full max-w-6xl grid overflow-hidden gap-4 p-4">
        {currentVariant.vendors.map((vendor) => (
          <StoreListItem key={vendor.name} store={vendor} />
        ))}
      </div>
    </>
  )
}

export default Overview
