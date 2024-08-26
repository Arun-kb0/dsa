// * count steps to reach zero

console.log(countSteps(100))
console.log(countSteps(10))
console.log(countSteps(5))

function countSteps(n) {
  return countStepsHelper(n, 0)
}

function countStepsHelper(n, steps) {
  if (n === 0) return steps
  if (n % 2 === 0) {
    return countStepsHelper(n/2, ++steps)
  } else {
    return countStepsHelper(n-1, ++steps)
  }
}