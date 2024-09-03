// const arr = [3, 4, 1, 5, -8]
// console.log(mergeSortDec(arr))

// const dates = ["2023-09-12", "2024-04-25", "2022-11-08", "2020-01-01", "2023-12-01"]
// console.log(mergeSortDatesInDec(dates))

// const arr = [1, 4, 1, 6, 9, 3,7]
const arr = [4, 3, 7, 8, 6, 2, 1]
console.log(convertToZigzag(arr))
  

function convertToZigzag(arr = []) {
  arr = mergeSort(arr)
  for (let i = 1; i < arr.length - 1; i += 2) {
    let tmp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = tmp
  }
  return arr
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  let first = mergeSort(arr.slice(0, mid))
  let second = mergeSort(arr.slice(mid, arr.length))
  return mergeAsc(first, second)
}

function mergeAsc(first, second) {
  let f = 0, s = 0
  const result = []
  const addToEnd = (index, arr) => {
    for (let i = index; i < arr.length; i++) {
      result.push(arr[i])
    }
  }

  while (f < first.length && s < second.length) {
    if (first[f] < second[s]) {
      result.push(first[f++])
    } else {
      result.push(second[s++])
    }
  }

  if (f < first.length) {
    addToEnd(f, first)
  } else if (s < second.length) {
    addToEnd(s, second)
  }

  return result
}


function mergeSortDatesInDec(dates = []) {
  if (dates.length <= 1) return dates
  let mid = Math.floor(dates.length / 2)
  let first = mergeSortDatesInDec(dates.slice(0, mid))
  let second = mergeSortDatesInDec(dates.slice(mid, dates.length))
  return mergeDatesArray(first, second)
}

function mergeDatesArray(first, second) {
  let f = 0, s = 0
  const result = []
  const addToEnd = (idx, arr) => {
    for (let i = idx; i < arr.length; i++) {
      result.push(arr[i])
    }
  }
  while (f < first.length && s < second.length) {
    let date1 = new Date(first[f])
    let date2 = new Date(second[s])
    if (date1 > date2) {
      result.push(first[f++])
    } else {
      result.push(second[s++])
    }
  }

  if (f < first.length) {
    addToEnd(f, first)
  } else if (s < second.length) {
    addToEnd(s, second)
  }
  return result
}



//  * sort array in dec 
function mergeSortDec(arr = []) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let first = mergeSortDec(arr.slice(0, mid))
  let second = mergeSortDec(arr.slice(mid, arr.length))
  return merge(first, second)
}

function merge(first, second) {
  let f = 0, s = 0, k = 0
  const result = []
  const addToEnd = (idx, arr) => {
    for (let i = idx; i < arr.length; i++) {
      result.push(arr[i])
    }
  }
  while (s < second.length && f < first.length) {
    if (first[f] > second[s]) {
      result.push(first[f++])
    } else {
      result.push(second[s++])
    }
  }

  if (f < first.length) {
    addToEnd(f, first)
  } else if (s < second.length) {
    addToEnd(s, second)
  }
  return result
}
