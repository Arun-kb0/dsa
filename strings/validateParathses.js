// * validate  Parentheses
// * leetcode 20

// const s = "()"
// const s = "[()]"
const s = "[()]]"
console.log('is valid ',validateParentheses(s))

function validateParentheses(str) {
  const n  =str.length
  const hashMap = new Map()
  hashMap.set(')','(')
  hashMap.set('}','{')
  hashMap.set(']','[')
  hashMap.set( '>','<')
  const result =[]
  
  for (let char of str) {
    if (result.length !==0 && hashMap.get(char) === result[result.length - 1]) {
      console.log(result)
      result.pop()
    } else {
      result.push(char)
    }
  }
  return result.length===0 ? true : false
}
