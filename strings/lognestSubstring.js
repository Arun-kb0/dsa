// * find longest substring without repeating characters
// * leet code 3
//  * sliding window playlist

// const str = 'abcabcbb'
const str = 'pwwkew'
// const str = "bbbbb"

const res = getLongestSubstring(str)
console.log('longest substring present =', res)

function getLongestSubstring(str) {
  let r = 1, l = 0
  const n = str.length
  const set = new Set()
  let maxCount = 0, count = 0
  while (l < n && r < n) {
    while (set.has(str[l])) {
      set.delete(str[r])
      r++
    }
    maxCount = Math.max(maxCount, l - r + 1)
    set.add(str[l])
    l++
  }

  return maxCount
}
