import cleanAndTrim from './cleanStrings'
import sortStrings from './sortStrings'

const filterData = (data, query) => {
  const filteredData = data.filter((result) =>
    cleanAndTrim(result.name).includes(cleanAndTrim(query))
  )

  const sortedData = sortStrings(filteredData, 'name')

  return sortedData
}

export default filterData
