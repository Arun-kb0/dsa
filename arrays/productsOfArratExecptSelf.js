// * product of array except self
// * leetcode 238

// const nums = [1, 2, 3, 4] //Output: [24,12,8,6]
const nums = [-1, 1, 0, -3, 3] //Output:  [0,0,9,0,0]


console.log(findTheProductWithOutSelf(nums))

function findTheProductWithOutSelf(nums) {
  const n = nums.length
  const result = []
  let prefix = 1
  let postfix = 1

  for (let i = 0; i < n; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] = Math.abs(result[i] * postfix)
    postfix *= nums[i]
  }
  return result
}