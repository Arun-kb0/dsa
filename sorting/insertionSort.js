const arr = [3, 4, -12, 5, 1, 9]
console.log(insertionSort(arr))


function insertionSort(arr) {
  const n = arr.length
  const swap = (idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  for (let i = 0; i < n - 1; i++) {
    for (j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(j, j - 1)
      } else {
        break
      }
    }
  }

  return arr

}