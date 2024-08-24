// * leetcode 167
// * two sum two , fin two element that give target in an sorted array

// const nums = [2, 7, 11, 15], target = 9
const nums = [1, 3, 4, 5, 7, 10], target = 9

console.log(findTwoSum2(nums, target))


function findTwoSum2(nums, target) {
  let s = 0, e = nums.length - 1
  let sum = 0

  while (s < e) {
    const sum = nums[s] + nums[e]
    if (target === sum) return [s, e]
    target < sum ? e-- : s++
  }
  return [-1, -1]
}