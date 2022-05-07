import Image from 'next/image'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import OverviewTable from './OverviewTable'
import Rating from './Rating'

const Overview = () => {
  const product = [
    { id: 1, name: 'weight', value: '55g' },
    { id: 2, name: 'type', value: 'linear' },
    { id: 3, name: 'type', value: 'linear' },
    { id: 4, name: 'type', value: 'linear' },
    { id: 5, name: 'type', value: 'linear' },
    { id: 6, name: 'type', value: 'linear' },
  ]

  const breakpointSm = useMediaQuery(breakpoints.small)
  const breakpointMd = useMediaQuery(breakpoints.medium)
  const breakpointLg = useMediaQuery(breakpoints.large)

  return (
    <div className="w-full flex md:flex-row flex-col justify-center bg-zinc-900">
      <div className="md:flex gap-8 max-w-7xl p-4">
        <div className="flex gap-8 p-4">
          <Image
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
            alt="Switch"
            height={breakpointMd ? 144 : breakpointLg ? 224 : 288}
            width={breakpointMd ? 144 : breakpointLg ? 224 : 288}
            layout={'fixed'}
          />
          {breakpointMd && (
            <div>
              <h1>Name of Switch</h1> <Rating entity={product} />
            </div>
          )}
        </div>
        <div className="w-full ml-4 mr-4 flex flex-col gap-2">
          {!breakpointMd && (
            <div>
              <h1>Name of Switch</h1>
              <Rating entity={product} />
            </div>
          )}

          <p className="text-zinc-300">
            Official Gateron Distributor. Linear Switch. 50 Cn Actuation Force. 4mm Key Travel. For
            RGB or LED Mounted Lighting. Transparent Casing. Plate Mount.
          </p>
        </div>
        <OverviewTable product={product} type="switch" />
      </div>
    </div>
  )
}

export default Overview
