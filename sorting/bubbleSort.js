// * bubble sort

// const arr = [1, 5, 2, 6, 9, 3, 4]
const arr = [13, 5, 21, 6, 9, 3, 4]
// console.log(bubbleSort(arr))
// console.log(bubbleSortDec(arr))

const strs = ["apple", "kiwi", "banana", "pear", "grape"]
console.log(sortStringsBasedOnLength(strs))

function sortStringsBasedOnLength(strs) {
  const n = strs.length
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (strs[j].length < strs[j - 1].length) {
        const tmp = strs[j]
        strs[j] = strs[j - 1]
        strs[j - 1] = tmp
      }
    }
  }
  return strs
}


function bubbleSortDec(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j] > arr[j - 1]) {
        const tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    }
  }
  return arr
}



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

