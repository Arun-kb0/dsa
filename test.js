const strs = ["ab", "cd"]
const arr = [[[1, 2, 3], [1, 2, 3, 4, 5], [5, 6]]]
console.log(reverse(strs))


function reverse(strs) {
  const n = strs.length
  let result = []


  for (let i = 0; i < n; i++) {
    const str = strs[i]
    let tmp = ''
    for (let j = str.length - 1; j >= 0; j--) {
      tmp += str[j]
    }
    result.unshift(tmp)
  }
  return result
}