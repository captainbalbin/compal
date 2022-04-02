const cleanAndTrim = (str) => {
  if (str) return str.trim().replace(/ /g, '')

  return ''
}

export default cleanAndTrim
