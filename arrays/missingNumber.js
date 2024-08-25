
const nums = [3, 0, 1] //2
// const nums = [0,1]
// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1] //8
// const nums = [1, 2, 0, 6, 4, 7, 3]

// console.log('missing number = ', findMissingNumber(nums))
console.log('missing number = ', findMissingOpt(nums))



function findMissingNumber(nums) {
  const n = nums.length
  let p = 0, idx = 0;

  while (idx < n && p < n) {
    if (idx === nums[p]) {
      let tmp = nums[idx]
      nums[idx] = nums[p]
      nums[p] = tmp
      idx++
      p = idx
    } else {
      p++
    }
  }
  return idx
}


function findMissingOpt(nums) {
  let sum = nums.length
  for (let i = 0; i < nums.length; i++) {
    sum += (i - nums[i])
  }
  return sum
}