// * find the nth element of Fibonacci
// * time complexity is 2^n


console.log("n th Fibonacci = ", fib(4))
console.log("n th Fibonacci = ", fib(6))

function fib(n) {
  if(n<2) return n
  return fib(n - 1) + fib(n - 2)
}

