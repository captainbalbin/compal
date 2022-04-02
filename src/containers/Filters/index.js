import Filter from '../../components/Filter'

const Filters = ({ isBlurred }) => {
  const styling = `grid grid-cols-2 gap-4 w-full pt-16 ${
    isBlurred ? 'blur-sm' : ''
  }`

  return (
    <div className={styling}>
      <Filter filterType="switches" />
      <Filter filterType="deskmats" />
      <Filter filterType="keycaps" />
      <Filter filterType="parts" />
    </div>
  )
}

export default Filters
