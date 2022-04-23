import cleanAndTrim from './cleanStrings'
import sortStrings from './sortStrings'

const filterData = (data, query) => {
  if (query) {
    const filteredData = data.filter((result) =>
      cleanAndTrim(result.name).includes(cleanAndTrim(query))
    )

    return sortStrings(filteredData, 'name')
  }

  return []
}

export default filterData
