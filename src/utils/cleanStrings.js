const cleanAndTrim = (str) => {
  if (str) return str.trim().replace(/ /g, '').toLowerCase()

  return ''
}

export default cleanAndTrim
