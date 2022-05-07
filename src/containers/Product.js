import Overview from '../components/Overview/Overview'
import StoreList from '../components/StoreList'

const Product = () => {
  const product = {
    id: 'jsakld1231',
    name: 'Gateron Yellow',
    brand: 'Gateron',
    stores: [
      {
        id: 4,
        name: 'KBNordic',
        url: 'https://kbnoric.se',
        price: '€5',
        rating: 1.1,
      },
      {
        id: 1,
        name: 'MyKeyboard',
        url: 'https://mykeyboard.eu',
        price: '€5.00',
        shipping: '€1.20',
        rating: 4.1,
      },
      {
        id: 3,
        name: 'Keygem',
        url: 'https://keygem.store',
        price: '€5.10',
        rating: 3.6,
      },

      {
        id: 2,
        name: 'CandyKeys',
        url: 'https://candykeys.com',
        price: '€5.20',
        rating: 2.2,
      },

      {
        id: 5,
        name: 'MaxGaming',
        url: 'https://maxgaming.se',
        price: '€5.20',
        rating: 5.0,
      },
    ],
  }

  return (
    <div className="flex-1 w-full flex flex-col place-items-center bg-zinc-900 bg-opacity-25">
      <Overview product={product} />
      <StoreList product={product} />
    </div>
  )
}

export default Product
