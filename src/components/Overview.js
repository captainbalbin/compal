import Image from 'next/image'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'
import OverviewTable from './OverviewTable'

const Overview = () => {
  const product = [
    { id: 1, name: 'weight', value: '55g' },
    { id: 2, name: 'type', value: 'linear' },
    { id: 2, name: 'type', value: 'linear' },
    { id: 2, name: 'type', value: 'linear' },
    { id: 2, name: 'type', value: 'linear' },
    { id: 2, name: 'type', value: 'linear' },
  ]

  const breakpointSm = useMediaQuery(breakpoints.small)
  const breakpointMd = useMediaQuery(breakpoints.medium)
  const breakpointLg = useMediaQuery(breakpoints.large)

  return (
    <div className="w-full flex md:flex-row flex-col p-4 bg-zinc-900 rounded-md">
      <div className="sm:flex">
        <div className="flex">
          <Image
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/CHERRY_MX3A-11NN_01_600x.png?v=1613505375"
            alt="Switch"
            height={breakpointMd ? 144 : breakpointLg ? 224 : 288}
            width={breakpointMd ? 144 : breakpointLg ? 224 : 288}
            layout={'fixed'}
          />
          {breakpointSm && (
            <div>
              <h1>Name of Switch</h1> <h5>Rating</h5>
            </div>
          )}
        </div>
        <div className="w-full ml-4 mr-4 flex flex-col gap-2">
          {!breakpointSm && (
            <>
              <h1>Name of Switch</h1> <h5>Rating</h5>
            </>
          )}

          <p>
            Official Gateron Distributor. Linear Switch. 50 Cn Actuation Force. 4mm Key Travel. For
            RGB or LED Mounted Lighting. Transparent Casing. Plate Mount.
          </p>
        </div>
      </div>

      <OverviewTable product={product} type="switch" />
    </div>
  )
}

export default Overview
