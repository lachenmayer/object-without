module.exports = function without(obj, keys) {
  if (typeof obj !== 'object') {
    throw new TypeError('Can not remove key from non-object')
  }
  if (obj == null) {
    return null
  }
  const newObj = Object.assign(Array.isArray(obj) ? [] : {}, obj)
  if (keys in newObj) {
    delete newObj[keys]
  } else if (Symbol.iterator in Object(keys)) {
    for (let key of keys) {
      delete newObj[key]
    }
  }
  return newObj
}
