
const arr = [1, 4, 5, 6, 8, 10, 22]
const target = 6
console.log(search(arr, 0, arr.length - 1, target))


function search(arr, s, e, target) {
  let m = s + (e - s) / 2
  if (arr[m] === target) return m
  if (arr[m] > target) return search(arr, s, m - 1, target)
  else return search(arr, m + 1, e, target)
}

