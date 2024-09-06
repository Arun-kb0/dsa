// * selection sort
// * find max
// const arr = [0, 22, -10, 4, 2, 9]
// const arr = [9]
// const arr = [9, 6, 4, 3, 1]
console.log(selectionSort(arr))

// const persons = [{ name: "Alice", age: 34 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 20 }]
// console.log(selectionSortPersons(persons))

const dates = ["2023-09-12", "2021-04-25", "2020-01-01", "2022-11-08"]
console.log(selectionSortDates(dates))

function selectionSortDates(dates) {
  const n = dates.length
  const swap = (i1, i2) => {
    const tmp = dates[i1]
    dates[i1] = dates[i2]
    dates[i2] = tmp
  }

  for (let i = 0; i < n; i++) {
    let max = Number.MIN_SAFE_INTEGER
    let maxIdx = i
    for (let j = 0; j < n - i; j++) {
      let currentDate = new Date(dates[j])
      if (max < currentDate) {
        max = currentDate
        maxIdx = j
      }
      if (j === n - i - 1) {
        swap(maxIdx, j)
      }
    }
  }
  return dates
}

function selectionSortPersons(arr) {
  const n = arr.length
  const swap = (i1, i2) => {
    let tmp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = tmp
  }
  for (let i = 0; i < n; i++) {
    let max = arr[i]?.age
    let maxIdx = i
    for (let j = 0; j < n - i; j++) {
      if (max > arr[j]?.age) {
        max = arr[j]?.age
        maxIdx = j
      }
      if (j === n - i - 1) {
        swap(maxIdx, j)
      }
    }
  }
  return arr
}


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