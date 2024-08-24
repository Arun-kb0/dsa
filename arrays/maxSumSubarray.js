// * find the max sum sub array
// * leet code 53

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] // 6
const nums = [1, -3, 2, 1, -1] // 3
// const nums = [-2, -1] // -1

const res = getMaxSumSubArray(nums)
console.log('max sum subarray ', res)


function getMaxSumSubArray(nums) {

  let cMax = nums[0], max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    cMax = Math.max(nums[i], cMax + nums[i])
    max = Math.max(cMax, max)
  }
  return max
}