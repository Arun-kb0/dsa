// * find elements in rotated sorted array
// * leetcode 33

// const nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// const nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// const nums = [1], target = 0
const nums = [1, 3, 5], target = 5

console.log(findElement(nums, target))


function findElement(nums, target) {
  let s = 0, e = nums.length - 1
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2)
    if (nums[m] === target) {
      return m
    }
    if (nums[s] <= nums[m]) {
      if (target < nums[s] || target > nums[m]) {
        s = m + 1
      } else {
        e = m - 1
      }
    } else {
      if (target < nums[s] || target > nums[m]) {
        e = m - 1
      } else {
        s = m + 1
      }
    }
  }
  return -1
}