

console.log('factorial = ',fact(5))
console.log('factorial = ',fact(4))

function fact(number) {
  if (number === 1) return 1
  return number * fact(number-1)
}