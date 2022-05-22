const Heading = ({ product, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold sm:text-lg text-base">{product.name}</h1>
        <h3 className="font-bold text-xs text-zinc-400 uppercase tracking-wider">
          {product.brand}
        </h3>
      </div>
      {children}
    </div>
  )
}

export default Heading
