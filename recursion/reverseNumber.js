
let sum = 0

// console.log('reversed number = ', reverseNumber(1824))
// console.log('reversed number = ', reverseNumber(1234))
// console.log('reversed number = ', reverseNumber(5009))

// rev2(5009)
// console.log('reversed number = ', sum)

console.log(rev3(12345))

function reverseNumber(n) {
  if (n % 10 === n) return n
  return (n % 10).toString() + reverseNumber(Math.floor(n / 10))
}


function rev2(n) {
  if (n === 0) return
  const rem = n % 10
  sum = sum * 10 + rem
  rev2(Math.floor(n / 10))
}

// * using helper function in recursion
function rev3(n) {
  const digits = Math.floor(Math.log(n)) + 1
  return rev3Helper(n, digits)
}

function rev3Helper(n, digits) {
  if (n % 10 === n) return n
  const rem = n % 10
  return rem * Math.floor(Math.pow(10, digits - 1)) + rev3Helper(Math.floor(n / 10), digits - 1)
}