const filterData = (data, query) => {
  const filteredData = data.filter((result) =>
    result.name
      .replace(/ /g, '')
      .toLowerCase()
      .includes(query.replace(/ /g, '').toLowerCase())
  )

  return filteredData
}

export default filterData
