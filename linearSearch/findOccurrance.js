const nums = [4, 2, 4, 6, 4, 1, 4]
const target = 4

console.log(findOccurrence(nums, target))

function findOccurrence(nums, target) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) count++
  }
  return count
}