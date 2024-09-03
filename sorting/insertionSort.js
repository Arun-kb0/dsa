// const arr = [3, 4, -12, 5, 1, 9]
// console.log(insertionSort(arr))

// const words = ["banana", "apple", "orange", "kiwi", "grape"]
// console.log(sortWordsAlphabetically(words))

const events = [{ start: 14, end: 15 }, { start: 9, end: 10 }, { start: 11, end: 12 }]
console.log(sortEvents(events))

function sortEvents(event) {
  const n = event.length
  const swap = (i1, i2) => {
    const tmp = event[i1]
    event[i1] = event[i2]
    event[i2] = tmp
  }
  for (let i = 0; i < n; i++){
    for (let j = i + 1; j >= 0; j--){
      if (event[j]?.start < event[j - 1]?.start) {
        swap(j,j-1)
      } else {
        break
      }
    }
  }
  return event
}


function sortWordsAlphabetically(words) {
  const n = words.length
  const swap = (idx1, idx2) => {
    const tmp = words[idx1]
    words[idx1] = words[idx2]
    words[idx2] = tmp
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (words[j] < words[j - 1]) {
        swap(j, j - 1)
      } else {
        break;
      }
    }
  }
  return words
}


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