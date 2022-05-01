const Overview = ({ item }) => {
  return (
    <div className="w-full h-full row-span-1 grid grid-flow-col grid-cols-4 p-4 bg-zinc-800 rounded-md">
      <div className="">Image</div>
      <div className="col-span-2">
        <h1>Name of Switch</h1>
        <h5>Rating</h5>
      </div>
      <div className="">Details {item}</div>
    </div>
  )
}

export default Overview
