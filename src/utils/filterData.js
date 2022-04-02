import cleanAndTrim from './cleanStrings'

const filterData = (data, query) => {
  const filteredData = data.filter((result) => {
    return cleanAndTrim(result.name).includes(cleanAndTrim(query))
  })

  return filteredData
}

export default filterData
