import Filter from '../components/Filter'

const Filters = ({ isVisible }) => {
  const styling = `grid grid-cols-2 gap-4 w-full p-4 pt-16 ${
    isVisible ? 'blur-sm cursor-default' : ''
  }`

  return (
    <div className={styling}>
      <Filter isVisible={isVisible} filterType="switches" />
      <Filter isVisible={isVisible} filterType="deskmats" />
      <Filter isVisible={isVisible} filterType="keycaps" />
      <Filter isVisible={isVisible} filterType="parts" />
    </div>
  )
}

export default Filters
