const config = require('../../config.json')

export function isEmpty (value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}

export function regex (value, type) {
  if (type === config._regex_type._phone) {
    if (!/^1[345678]\d{9}$/.test(value)) {
      return false
    }
    return true
  }
}
