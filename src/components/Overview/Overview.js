import Image from 'next/image'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { breakpoints } from '../../utils/constants'
import OverviewTable from './OverviewTable'
import Heading from './Heading'
import Variant from './Variant'
import Rating from '../Rating'

const Overview = ({ product, currentVariant, onClick }) => {
  const breakpointSm = useMediaQuery(breakpoints.small)
  const breakpointMd = useMediaQuery(breakpoints.medium)

  return (
    <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-700 bg-opacity-20 p-4">
      <div className="md:flex w-full gap-8 max-w-6xl p-4">
        <div className="flex gap-8 p-4">
          <Image
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
            alt="Switch"
            height={breakpointSm ? 112 : 144}
            width={breakpointSm ? 112 : 144}
            layout={'fixed'}
          />
          {breakpointMd && (
            <Heading product={product}>
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
            </Heading>
          )}
        </div>
        <div className="flex flex-row gap-8 w-full">
          <div className="w-full flex flex-col gap-4">
            {!breakpointMd && (
              <Heading product={product}>
                <Rating entity={product} />

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
                <p className="text-zinc-200">{currentVariant.description}</p>
              </Heading>
            )}
            {breakpointMd && !breakpointSm && (
              <p className="text-zinc-200">{currentVariant.description}</p>
            )}
          </div>
          {breakpointSm && <p className="text-zinc-200">{currentVariant.description}</p>}
          <OverviewTable details={currentVariant} />
        </div>
      </div>
    </div>
  )
}

export default Overview
