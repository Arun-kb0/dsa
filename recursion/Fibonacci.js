// * find the nth element of Fibonacci
// * time complexity is 2^n


console.log("n th Fibonacci = ", fib(4))
console.log("n th Fibonacci = ", fib(6))

function fib(n) {
  if (n === 0) return 0
  if (n < 2) return 1
  return fib(n - 1) + fib(n - 2)
}

