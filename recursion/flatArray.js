const arr = [1, 2, [2, 5], [2, [6, 7]]]
console.log(flatArray(arr))

function flatArray(arr) {
  const result = []

  function helper(arr) {
    for (let val of arr) {
      if (Array.isArray(val)) {
        helper(val)
      } else {
        result.push(val)
      }
    }
  }

  helper(arr)
  return result
}