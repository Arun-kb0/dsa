// * validate palindrome
// * leetcode 125

// const str = 'anna'
// const str = 'annas'
const str = "A man, a plan, a canal: Panama"


console.log(isPalindrome(str))

function isPalindrome(str1) {
  // * using loop
  // let str =
  // for (let char of str1) {
  //   if ((char >= 'A' && char <= 'Z')
  //     || (char >= 'a' && char <= 'z')
  //   ) {
  //     console.log(char)
  //     str = `${str}${char.toLowerCase()}`
  //   }
  // }
  // * using regex 
  let str = str1.replace(/[^a-zA-Z]/g,'').toLowerCase()
  console.log(str)
  
  let s = 0, e = str.length - 1
  while (s < e) {
    if (str[s] !== str[e]) {
      return false
    }
    s++
    e--
  }
  return true
}