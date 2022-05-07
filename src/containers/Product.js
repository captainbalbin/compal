import Overview from '../components/Overview'
import StoreList from '../components/StoreList'

const entity = {
  id: 'jsakld1231',
  name: 'Gateron Yellow',
  stores: [
    {
      name: 'MyKeyboard',
      url: 'https://mykeyboard.eu/',
      price: '€5.00',
      shipping: '€1.20',
      rating: 4.1,
    },
    {
      name: 'CandyKeys',
      url: 'https://candykeys.com',
      price: '€5.20',
      rating: 2.2,
    },
    {
      name: 'Keygem',
      url: 'https://keygem.store/',
      price: '€5.10',
      rating: 3.6,
    },
    {
      name: 'KBNordic',
      url: 'https://keygem.store/',
      price: '€5',
      rating: 1.1,
    },
    {
      name: 'Max Gaming',
      url: 'https://keygem.store/',
      price: '€5.10',
      rating: 5.0,
    },
  ],
}

const Product = () => {
  return (
    <div className="flex-1 w-full flex flex-col place-items-center bg-zinc-900 bg-opacity-25">
      <Overview entity={entity} />
      <StoreList entity={entity} />
    </div>
  )
}

export default Product
