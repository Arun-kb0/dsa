// * merge sort
// * done with divide and concur approach
// *  time O(n log n)
// * space O(n log n)

// const arr = [3, 2, 1, 5, 2]
const arr = [3, 4, 1, 5, -8]
// const arr = []

// console.log(mergeSort(arr))
mergeSortInPlace(arr, 0, arr.length)
console.log(arr)


function mergeSort(arr = []) {
  if (arr.length === 0) return arr
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  const first = mergeSort(arr.slice(0, mid))
  const second = mergeSort(arr.slice(mid, arr.length))
  return merge(first, second)
}

function merge(first = [], second = []) {
  let f = 0, s = 0, k = 0
  const result = []
  const appendRemaining = (idx, arr) => {
    while (idx < arr.length) {
      result.push(arr[idx])
      idx++
    }
  }
  while (f < first.length && s < second.length) {
    if (first[f] < second[s]) {
      result[k] = first[f]
      f++
    } else {
      result[k] = second[s]
      s++
    }
    k++
  }

  if (f < first.length) {
    appendRemaining(f, first)
  } else if (s < second.length) {
    appendRemaining(s, second)
  }
  // console.log(result)
  return result
}



// * merge sort in place
function mergeSortInPlace(arr = [], start, end) {
  if (arr.length === 0) return
  if (end - start === 1) return
  const mid = Math.floor(start + (end - start) / 2)
  mergeSortInPlace(arr, start, mid)
  mergeSortInPlace(arr, mid, end)
  mergeInPlace(arr, start, mid, end)
}

function mergeInPlace(arr, start, mid, end) {
  let k = 0, f = start, s = mid
  const result = []
  const appendToEnd = (i, e) => {
    while (i < e) {
      result.push(arr[i])
      i++
    }
  }
  while (f < mid && s < end) {
    if (arr[f] < arr[s]) {
      result[k] = arr[f]
      f++
    } else {
      result[k] = arr[s]
      s++
    }
    k++
  }

  if (f < mid) {
    appendToEnd(f, mid)
  } else if (s < end) {
    appendToEnd(s, end)
  }

  for (let i = 0; i < result.length; i++) {
    arr[start + i] = result[i]
  }
}
