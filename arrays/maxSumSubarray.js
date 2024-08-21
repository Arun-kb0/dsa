// * find the max sum sub array
// * leet code 53

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] // 6
// const nums = [1, -3, 2, 1, -1] // 3

const res = getMaxSumSubArray(nums)
console.log('max sum subarray ', res)


function getMaxSumSubArray(nums) {
  const n = nums.length
  let sum = nums[0], maxSum = 0

  for (let i = 1; i < n; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    maxSum = Math.max(sum, maxSum)
  }

  return maxSum
}