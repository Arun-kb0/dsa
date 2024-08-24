// * leet code 121

const nums = [7, 1, 5, 3, 6, 4] // 5
// const nums = [7, 6, 4, 3, 1]

const res = getBestTimeToBuyStock(nums)
console.log('best profit ', res)


function getBestTimeToBuyStock(nums) {
  const n = nums.length
  let l = 0, r = 1, bestPrice = 0

  while (l < n && r < n) {
    bestPrice = Math.max(bestPrice, nums[r] - nums[l])
    nums[l] > nums[r] ? l++ : r++
  }
  return bestPrice
}