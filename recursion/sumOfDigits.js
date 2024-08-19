// * find sum of individual digits

console.log('sum of digits = ', digitSum(1342))
console.log('prod of digits = ', productOfDigits(505))

function digitSum(number) {
  if (number === 0) return 0
  const res = digitSum(Math.floor(number / 10)) + (number % 10)
  return res
}

// * products of digits
function productOfDigits(number) {
  if (number % 10 === number) return number
  const res = productOfDigits(Math.floor(number / 10)) * (number % 10)
  return res
} 


// * recursion test  scenario
inc(5)
function inc(n) {
  if (n === 0) return 0
  console.log(n)
  inc(--n)
  // * this will inc pass the n and after inc value
  // * so infinite recursion happen
  // inc(n--)
}
