const sortStrings = (array, sortBy) => {
  return array.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
}

export default sortStrings
