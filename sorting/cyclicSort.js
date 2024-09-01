// * cyclic sort
// * used for range of values 
// * o(n)

const arr = [4, 1, 7, 2, 3, 5, 6, 8]
// const arr = [2, 4, 1, 3]
console.log(cyclicSort(arr))


function cyclicSort(arr = []) {
  const n = arr.length
  const swap = (idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }
  let i = 0
  while (i < n) {
    const correct = arr[i] - 1
    if (arr[i] !== arr[correct]) {
      swap(correct, i)
    } else {
      i++
    }
  }
  return arr
}