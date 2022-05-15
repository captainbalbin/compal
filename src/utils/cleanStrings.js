const cleanAndTrim = (str) => {
  if (str) return str.trim().replace(/-|\s/g, '').toLowerCase()

  return ''
}

export default cleanAndTrim
