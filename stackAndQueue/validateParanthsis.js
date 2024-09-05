const { Stack } = require("./stack")

const str = '{[]}'
console.log(validateParenthesis(str))

function validateParenthesis(str) {
  const hashMap = new Map()
  const stack = new Stack()
  hashMap.set('}', '{')
  hashMap.set(']', '[')
  hashMap.set(')', '(')
  hashMap.set('>', '<')

  for (let c of str) {
    if (!stack.isEmpty() && hashMap.get(c) === stack.peak()) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.isEmpty()
}