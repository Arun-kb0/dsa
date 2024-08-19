

let count = 0
countZeros(2030100)
console.log(count)

function countZeros(n) { 
  if(n<=0) return
  const dig = n % 10
  if (dig === 0) count++
  countZeros(Math.floor(n/10))
}