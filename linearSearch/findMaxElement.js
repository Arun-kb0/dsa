const nums = [1, 2, 3, 4, 22, 1, 2]
console.log('max ',findMaxElement(nums))

function findMaxElement(nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max)
  }
  return max
}