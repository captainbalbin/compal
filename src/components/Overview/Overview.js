import Image from 'next/image'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { breakpoints } from '../../utils/constants'
import OverviewTable from './OverviewTable'
import Heading from './Heading'
import OptionsDropdown from './Options'

const Overview = ({ product }) => {
  const productValues = [
    { id: 3, name: 'Feedback', value: 'Linear' },
    { id: 1, name: 'Actuation', value: '55.0 g' },
    { id: 2, name: 'Bottom Out', value: '63.5 g' },
    { id: 4, name: 'Travel', value: '4.00 mm' },
    { id: 5, name: 'Factory Lubed', value: 'No' },
  ]

  const weights = [55, 63.5, 68]

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
          {breakpointMd && <Heading product={product} />}
        </div>
        <div className="flex flex-co gap-2">
          <div className="w-full flex flex-col gap-4">
            {!breakpointMd && <Heading product={product} />}
            <p className="text-zinc-300">
              Official Gateron Distributor. Linear Switch. 50 Cn Actuation Force. 4mm Key Travel.
              For RGB or LED Mounted Lighting. Transparent Casing. Plate Mount.
            </p>
            <OptionsDropdown weights={weights} />
          </div>
          <OverviewTable product={productValues} type="switch" />
        </div>
      </div>
    </div>
  )
}

export default Overview
