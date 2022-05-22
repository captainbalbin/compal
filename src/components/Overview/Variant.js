const Variant = ({ indicator, onClick, selected }) => {
  return (
    <button
      className={`flex items-center p-2 text-sm border rounded-md hover:bg-zinc-800 hover:cursor-pointer text-zinc-300 ${
        selected ? 'border-sky-700' : 'border-zinc-700'
      }`}
      value={indicator}
      onClick={(e) => onClick(e)}
    >
      {indicator}
    </button>
  )
}

export default Variant
