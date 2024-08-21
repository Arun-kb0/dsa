// * leet code 121

const nums = [7, 1, 5, 3, 6, 4]
// const nums = [7, 6, 4, 3, 1]

const res = getBestTimeToBuyStock(nums)
console.log('best profit ',res)


function getBestTimeToBuyStock(nums) {
  const n = nums.length
  let l = 0, r = 1
  let max = 0, currentMax = 0

  while (l < n && r < n) {
    currentMax = nums[r] - nums[l]
    if (max < currentMax) {
      max = currentMax
    }

    if (nums[l] > nums[r]) {
      l++
    } else {
      r++
    }
  }
  return max
}