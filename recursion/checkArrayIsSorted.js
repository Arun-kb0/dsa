const arr = [1, 2, 5, 6, 9]
console.log(checkSorted(arr))

function checkSorted(arr = [], index = 0) {
  if (index === arr.length - 1) return true
  if (arr[index] > arr[index + 1]) {
    return false
  }
  return checkSorted(arr, index + 1)
}