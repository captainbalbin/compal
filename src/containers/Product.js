import Overview from '../components/Overview/Overview'
import OverviewMobile from '../components/Overview/OverviewMobile'
import StoreList from '../components/StoreList'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { breakpoints } from '../utils/constants'

const product = {
  id: 'jsakld1231',
  name: 'Gateron Yellow',
  brand: 'Gateron',
  description:
    '- Official Gateron Distributor\n- Linear Switch\n- 50 Cn Actuation Force\n- 4mm Key Travel\n- For RGB or LED Mounted Lighting\n- Transparent Casing\n- Plate Mount',
  variants: [{ id: '55g' }, { id: '63.5g' }, { id: '68g' }],
}

const details = {
  id: '55g',
  actuation: '55g',
  bottomOut: '63.5g',
  factoryLubed: false,
  feedback: 'linear',
  travel: '4mm',
  vendors: [
    {
      name: 'KBNordic',
      url: 'https://kbnordic.se',
      price: '€5',
    },
    {
      name: 'MyKeyboard',
      url: 'https://mykeyboard.eu',
      price: '€5.00',
      shipping: '€1.20',
      rating: 4.1,
    },
    {
      name: 'Keygem',
      url: 'https://keygem.store',
      price: '€5.10',
      rating: 3.6,
    },
    {
      name: 'CandyKeys',
      url: 'https://candykeys.com',
      price: '€5.20',
      rating: 2.2,
    },
    {
      name: 'MaxGaming',
      url: 'https://maxgaming.se',
      price: '€5.20',
      rating: 5.0,
    },
  ],
}

const Product = () => {
  const breakpointMd = useMediaQuery(breakpoints.medium)

  // const details = variants.filter((v1) => product.variants.find((v2) => v1.url === v2.url))

  return (
    <div className="flex-1 w-full flex flex-col place-items-center bg-zinc-900 bg-opacity-25">
      {breakpointMd ? (
        <OverviewMobile product={product} details={details} />
      ) : (
        <Overview product={product} details={details} />
      )}
      <StoreList variant={details} />
    </div>
  )
}

export default Product
