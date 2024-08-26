

console.log(palindrome('Inna'))
console.log(palindrome('anna'))

function palindrome(str) {
  return isPalindrome(str, 0, str.length - 1)
}

function isPalindrome(str, s, e) {
  if (s >= e) return true
  if (str[s] !== str[e]) return false
  return isPalindrome(str, ++s, --e)
}