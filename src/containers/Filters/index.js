import Filter from '../../components/Filter'

const Filters = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 bg-red-500 w-full">
      <Filter filterType="switch" />
      <Filter filterType="deskmat" />
    </div>
  )
}

export default Filters
