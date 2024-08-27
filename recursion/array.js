// const arr = [1, 10, 2, 90, 2, 6, 98, 2, 1]
const arr = [1, 2, 3, 4]
// console.log(findMax(arr))
console.log(reverseArray(arr))
// console.log(countOccurrences(arr, 1))
// console.log(productOfArray(arr))
// console.log(countEven(arr))

// const matrix = [[1, 3, 2], [2, 1], [1, 2, 37], 2]
// console.log(flattenArray(matrix))


function flattenArray(arr, i = 0, result = []) {
  if (i === arr.length) return result
  Array.isArray(arr[i])
    ? result.push(...arr[i])
    : result.push(arr[i])
  i++
  return flattenArray(arr, i, result)
}

function countEven(arr, i = 0, count = 0) {
  if (i === arr.length) return count
  if (arr[i] % 2 === 0) count++
  i++
  return countEven(arr, i, count)
}

function productOfArray(arr, i = 0, product = 1) {
  if (i === arr.length) return product
  product *= arr[i]
  i++
  return productOfArray(arr, i, product)
}

function countOccurrences(arr, target, i = 0, count = 0) {
  if (i === arr.length) return count
  if (arr[i] === target) count++
  i++
  return countOccurrences(arr, target, i, count)
}

function reverseArray(arr, i = 0, result = []) {
  if (i === arr.length) return result
  reverseArray(arr, i+1, result)
  result.push(arr[i])
  return result
}

function findMax(arr, i = 0, max = 0) {
  if (i === arr.length) return max
  max = Math.max(arr[i], max)
  i++
  return findMax(arr, i, max)
}