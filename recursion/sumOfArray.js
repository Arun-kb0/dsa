
const arr = [10, 20, 40, 30]
// const arr = [10, 1, 2, 3]
console.log(sumOfArray(arr))

function sumOfArray(arr, i = 0, sum = 0) {
  if (i === arr.length) return sum
  sum += arr[i]
  return sumOfArray(arr, ++i, sum)
}

