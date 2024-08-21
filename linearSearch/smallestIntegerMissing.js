// const nums = [3, 4, -1, 1]
const nums = [-2, 3, 4, 9, -9 - 1, 1, 5, 2, 8, 7]
console.log('missing ', findSmallestMissingInteger(nums))

function findSmallestMissingInteger(nums) {
  const n = nums.length

  nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > 0 && nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1
    }
  }
  return -1
}

