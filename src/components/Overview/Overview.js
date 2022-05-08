import Image from 'next/image'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { breakpoints } from '../../utils/constants'
import OverviewTable from './OverviewTable'
import Heading from './Heading'
import Variant from './Variant'

const Overview = ({ product, details }) => {
  const breakpointMd = useMediaQuery(breakpoints.medium)
  const breakpointLg = useMediaQuery(breakpoints.large)

  return (
    <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-900">
      <div className="md:flex w-full gap-8 max-w-7xl p-4">
        <div className="flex gap-8 p-4">
          <Image
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
            alt="Switch"
            height={breakpointMd ? 144 : breakpointLg ? 224 : 224}
            width={breakpointMd ? 144 : breakpointLg ? 224 : 224}
            layout={'fixed'}
          />
          {breakpointMd && <Heading product={product} />}
        </div>
        <div className="flex flex-row gap-8 w-full">
          <div className="w-full flex flex-col gap-4">
            {!breakpointMd && <Heading product={product} />}
            <p className="text-zinc-300">{product.description}</p>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <Variant key={variant.id} variant={variant.id} />
              ))}
            </div>
          </div>
          <OverviewTable details={details} />
        </div>
      </div>
    </div>
  )
}

export default Overview
