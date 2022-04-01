import Filters from '../../containers/Filters'
import SearchBar from '../SearchBar'

const Content = () => {
  return (
    <div className="w-1/2 h-1/3 mb-auto flex flex-col items-center justify-center">
      <SearchBar />
      <Filters filterType="switch" />
    </div>
  )
}

export default Content
