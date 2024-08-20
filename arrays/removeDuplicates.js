
// const arr = [1, 2, 2, 3, 3, 3]
const arr = [1, 1, 2]
removeDuplicatesInPlace(arr)
console.log(arr)

function removeDuplicatesInPlace(arr) {
  const n = arr.length
  let r = 1, l = 1
  while (r < n && l < n) {
    if (arr[r - 1] !== arr[r]) {
      arr[l] = arr[r]
      l++
    }
    r++
  }
  arr.length=l
}