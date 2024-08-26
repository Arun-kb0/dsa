// * longest palindrome
// * leetcode 5

// const s = "babad"
// Output: "bab"
const s = "cbbd"
// Output: "bb"
// const s = "a"
// Output: "a"
const s2 = "ac"
// Output: "a"

console.log(longestPalindrome(s))
console.log(longestPalindrome(s2))

function longestPalindrome(s) {
  if (s.length <= 1) return s

  const isPalindrome = (start, end, str) => {
    while (start < end) {
      if (str[start] !== str[end]) return false
      start++
      end--
    }
    return true
  }

  const n = s.length
  let count = 0, max = 1
  let position = [0, 0]
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPalindrome(i, j, s)) {
        count = j - i + 1
        if (count > max) {
          max = count
          position = [i, j]
        }
      }
    }
  }
  return s.slice(position[0], position[1] + 1)
}

