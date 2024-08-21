

const nums = [1, 2, 3, 45, 60]
const target = 45
console.log(findNum(nums, target))

function findNum(nums, target) {
  let s = 0, e = nums.length - 1
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2)
    if (nums[m] === target) {
      return m
    }
    if (nums[m] < target) {
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return null
}