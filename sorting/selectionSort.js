// * selection sort
// * find max  
// const arr = [0, 22, -10, 4, 2, 9]
// const arr = [9]
const arr = [9, 6, 4, 3, 1]
console.log(selectionSort(arr))


function selectionSort(arr = []) {
  const n = arr.length
  const swap = (idx1, idx2) => {
    let tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }
  for (let i = 0; i < n; i++) {
    let max = Number.MIN_VALUE
    let maxIdx = 0
    for (let j = 0; j < n - i; j++) {
      if (max < arr[j]) {
        max = arr[j]
        maxIdx = j
      }
      if (j === n - i - 1) {
        swap(maxIdx, j)
      }
    }
  }
  return arr
}