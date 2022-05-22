import Image from 'next/image'
import Heading from './Heading'
import OverviewTable from './OverviewTable'
import Variant from './Variant'
import StoreListItem from '../StoreListItem'

const OverviewMobile = ({ product, currentVariant, onClick }) => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-700 bg-opacity-20">
        <div className="flex flex-col gap-4 max-w-7xl p-4">
          <div className="flex gap-8 p-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
              alt="Switch"
              height={112}
              width={112}
              layout={'fixed'}
            />
            <div className="flex flex-col gap-4">
              <Heading product={product} />
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
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2">
            {currentVariant.description && (
              <div className="w-full flex flex-col gap-4">
                <p className="text-zinc-300">{currentVariant.description}</p>
              </div>
            )}
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
export default OverviewMobile
