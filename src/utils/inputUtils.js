const parseToUrl = (query) => {
  return query.trim().replace(/ /g, '+').toLowerCase()
}

export { parseToUrl }
