
const nums = [-2, 3, -4] // 24
console.log(findMaxProductSubarray(nums))


function findMaxProductSubarray() {
  let cMax = 1, cMin = 1
  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      cMax = 1
      cMin = 1
      continue
    }
    // console.log('num', nums[i], 'cMax =', cMax, ' cMin = ', cMin)
    const tmpCMax = cMax * nums[i]
    cMax = Math.max(cMax * nums[i], cMin * nums[i], nums[i])
    cMin = Math.min(cMin * nums[i], tmpCMax, nums[i])
    max = Math.max(max, cMax)
  }
  return max
}
