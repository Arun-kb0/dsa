// * longest repeating character replacement
// * leetcode 424

// const s = "ABAB", k = 2 // 4
const s = "AABABBA", k = 1 // 4
// const s = "BAAA", k = 0// 3

console.log('repeating ', findLongestRepeating(s, k))

function findLongestRepeating(s, k) {
  let r = 0, l = 0
  let n = s.length
  const hashMap = new Map()
  let longest = 0, maxLongest = 0

  const getMaxElementCount = () => {
    let count = 0
    for (let [key, value] of hashMap.entries()) {
      if (value > count) {
        count = value
      }
    }
    return count
  }

  while (r < n && l < n) {
    hashMap.set(s[r], hashMap.get(s[r]) + 1 || 1)
    const maxCount = getMaxElementCount()
    const replaceable = ((r - l) + 1) - maxCount
    if (replaceable > k) {
      hashMap.set(s[l], hashMap.get(s[l]) - 1)
      l++
    }
    maxLongest = Math.max((r - l + 1), maxLongest)
    r++
  }
  return maxLongest
}