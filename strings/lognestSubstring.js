// * find longest substring without repeating characters
// * leet code 3
//  * sliding window playlist

const str = 'abcabcbb'

const res = getLongestSubstring(str)
console.log('longest substring present =', res)

function getLongestSubstring(str) {
  let r = 1, l = 0
  const n = str.length
  const set = new Set()
  let count = 0, maxCount = 0
  while (l < n && r < n) {
    while (set.has(str[r])) {
      set.delete(str[l])
      count++
      l++
    }
    if (count > maxCount) {
      maxCount = count
    }

    set.add(str[l])
    r++
  }

  return maxCount
}
