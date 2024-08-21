
const str = 'anna'
// const str = 'annas'
console.log(isPalindrome(str))

function isPalindrome(str) {
  const n = str.length
  let s = 0, e = n-1
  
  while (s<=e) {
    if (str[s] !== str[e]) {
      return false
    }
    s++
    e--
  }
  return true
}