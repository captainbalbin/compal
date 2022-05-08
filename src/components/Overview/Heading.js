import Rating from '../Rating'

const Heading = ({ product }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold sm:text-lg text-base ">{product.name}</h1>
      <h3 className="font-bold text-xs text-zinc-400 uppercase tracking-wider">{product.brand}</h3>
      <Rating entity={product} />
    </div>
  )
}

export default Heading
