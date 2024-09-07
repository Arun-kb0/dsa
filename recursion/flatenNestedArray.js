const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// out : [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
const n = 1
console.log(flatNestedArray(arr, n))

function flatNestedArray(arr, n) {
  const result = []
  function helper(arr, level) {
    // console.log(level, n)
    for (let val of arr) {
      if (Array.isArray(val) && level <= n) {
        helper(val, level + 1)
      } else {
        result.push(val)
      }
    }
  }
  helper(arr, 1)
  return result
}
