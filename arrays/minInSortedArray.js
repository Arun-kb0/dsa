// const nums = [3, 4, 5, 1, 2] //1
// const nums = [4, 5, 6, 7, 0, 1, 2] //0
const nums = [4] //0

console.log('min value = ', findMinInArray(nums))

function findMinInArray(nums) {
  if (nums.length === 0) return nums

  let s = 0, e = nums.length - 1
  const n = nums.length
  let cMin = nums[0]
  let min = nums[0]

  while (s <= e) {
    cMin = Math.min(nums[s], nums[e])
    min = Math.min(min, cMin)
    s++
    e--
  }
  return min
}