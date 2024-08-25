// * find longest substring without repeating characters
// * leet code 3
//  * sliding window playlist

const str = 'abcabcbb'
// const str = 'pwwkew'
// const str = "bbbbb"
// const str = " "
// const str = "dvdf" //3

const res = getLongestSubstring(str)
console.log('longest substring present =', res)

function getLongestSubstring(str) {
  const n = str.length
  let max = 0
  const set = new Set()
  let l = 0, r = 0

  while (l < n && r < n) {
    while (set.has(str[r])) {
      set.delete(str[l])
      l++
    }
    set.add(str[r])
    max = Math.max(max, r - l + 1)
    r++
  }
  return max

}
