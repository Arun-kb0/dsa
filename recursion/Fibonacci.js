// * find the nth element of Fibonacci
// * time complexity is 2^n


console.log("n th Fibonacci = ", fib(4))
console.log("n th Fibonacci = ", fib(6))

function fib(n) {
  if (n === 0) return 0
  if (n < 2) return 1
  return fib(n - 1) + fib(n - 2)
}

printFib(10)


function printFib(n, a = 0, b = 1) {
  if (n === 0) return
  console.log(a)
  printFib(n-1, b, a + b)
}

