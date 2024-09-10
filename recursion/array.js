// const arr = [1, 10, 2, 90, 2, 6, 98, 2, 1]
// const arr = [1, 2, 3, 4]
const arr = [5, 6, 7, 8, 9, 1, 2, 3]
// console.log(findMax(arr))
// console.log(reverseArray(arr))
// console.log(countOccurrences(arr, 1))
// console.log(productOfArray(arr))
// console.log(countEven(arr))
// console.log(linearSearch(arr,98))
// console.log(linearSearchFindAllOccurrence(arr, 1))
// console.log(findOccurrences2(arr, 2))
// console.log(findTargetInTheRotatedArray(arr, 9))
// console.log(removeTargetFromString('abcdas', 'a'))

// const matrix = [[1, 3, 2], [2, 1], [1, 2, 37], 2]
// console.log(flattenArray(matrix))



function findTargetInTheRotatedArray(arr = [], target, s = 0, e = arr.length - 1) {
  if (s > e) return null
  const m = Math.floor(s + (e - s) / 2)

  if (target === arr[m]) return m
  if (arr[s] <= arr[m]) {
    if (target >= arr[s] && target <= arr[m]) {
      e = m - 1
    } else {
      s = m + 1
    }
  } else if (arr[e] >= arr[m]) {
    if (target <= arr[e] && target >= arr[m]) {
      s = m + 1
    } else {
      e = m - 1
    }
  }

  return findTargetInTheRotatedArray(arr, target, s, e)
}

// * with out passing array for result as argument
function findOccurrences2(arr = [], target, index = 0) {
  const result = []
  if (index === arr.length) return result
  // * ans for current function call only
  if (arr[index] === target) result.push(index)
  // * all  ans will be available in ans after fun call
  const ans = findOccurrences2(arr, target, index + 1)

  result.push(...ans)
  return result
}

function linearSearchFindAllOccurrence(arr, target, index = 0, result = []) {
  if (arr.length === index) return result
  if (arr[index] === target) result.push(index)
  return linearSearchFindAllOccurrence(arr, target, index + 1, result)
}

function linearSearch(arr = [], target, index = 0) {
  if (index === arr.length) return
  if (arr[index] === target) return index
  return linearSearch(arr, target, index + 1)
}


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
  reverseArray(arr, i + 1, result)
  result.push(arr[i])
  return result
}

function findMax(arr, i = 0, max = 0) {
  if (i === arr.length) return max
  max = Math.max(arr[i], max)
  i++
  return findMax(arr, i, max)
}