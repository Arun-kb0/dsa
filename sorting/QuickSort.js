// * quick sort
// * works well with arrays
// *


// const arr = [3, 1, 5, 10, -9, 7]
const arr = [3]
console.log('input = ', arr)
quickSort(arr, 0, arr.length - 1)
console.log('output = ', arr)


function quickSort(arr = [], low, high) {
  if (low >= high) return

  let s = low, e = high
  const m = Math.floor(s + (e - s) / 2)
  const pivot = arr[m]

  while (s <= e) {
    while (arr[s] < pivot) {
      s++
    }
    while (arr[e] > pivot) {
      e--
    }

    if (s <= e) {
      const tmp = arr[s]
      arr[s] = arr[e]
      arr[e] = tmp
      s++
      e--
    }
  }

  // * calling both sides
  quickSort(arr, low, e)
  quickSort(arr, s, high)
}