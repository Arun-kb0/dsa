

let count = 0
countZeros(2030100)
// countZeros(20020)
console.log(count)

function countZeros(n) { 
  if(n===0) return
  if (Math.floor(n % 10 )=== 0) count++
  countZeros(Math.floor(n/10))
}