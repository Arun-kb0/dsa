
const str = 'abczw'
console.log(removeChar(str, 'z'))

function removeChar(str, target, i = 0, result = '') {
  if (i ===str.length) return result
  if (str[i] !== target) {
    result += str[i]
  }
  return removeChar(str, target, ++i, result)
}