import Image from 'next/image'
import Heading from './Heading'
import OverviewTable from './OverviewTable'
import Variant from './Variant'

const OverviewMobile = ({ product, details }) => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-900">
      <div className="flex flex-col gap-4 max-w-7xl p-4">
        <div className="flex gap-8 p-4">
          <Image
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
            alt="Switch"
            height={144}
            width={144}
            layout={'fixed'}
          />
          <div className="flex flex-col gap-4">
            <Heading product={product} />
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <Variant key={variant.id} variant={variant.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-full flex flex-col gap-4">
            <p className="text-zinc-300">
              Official Gateron Distributor. Linear Switch. 50 Cn Actuation Force. 4mm Key Travel.
              For RGB or LED Mounted Lighting. Transparent Casing. Plate Mount.
            </p>
          </div>
        </div>
        <OverviewTable details={details} />
      </div>
    </div>
  )
}
export default OverviewMobile
