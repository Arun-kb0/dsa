// console.log(isPrime(5)) 
printPrimes(10)

function isPrime(n, div = 2) {
  if (n <= 1) return false
  if (div * div > n) return true
  if (n % div === 0) return false
  return isPrime(n - 1, div + 1)
}


function printPrimes(n, i = 2) {
  if (n === 0) return
  if (isPrime(i)) {
    process.stdout.write(i+', ')
    n -= 1
  }
  printPrimes(n, i + 1)
}