// * bubble sort

// const arr = [1, 5, 2, 6, 9, 3, 4]
const arr = [13, 5, 21, 6, 9, 3, 4]
console.log(bubbleSort(arr))

function bubbleSort(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    }
  }
  return arr
}