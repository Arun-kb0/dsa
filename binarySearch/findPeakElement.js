// * find peak element using binary search 
// * thats grater than its neighbors

// const nums = [1, 2, 3, 1] //3
const nums = [5, 4, 3, 1, 2, 4] //5 
console.log('peak element = ', findPeak(nums))

function findPeak(nums) {
  let s = 0, e = nums.length - 1

  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2)

    if (
      (m === e && nums[m] > nums[m - 1])
      || (m === s && nums[m] > nums[m + 1])
      || (nums[m] > nums[m - 1] && nums[m] > nums[m + 1])
    ) {
      return nums[m]
    }

    if (nums[m]> nums[m-1]) {
      s = m + 1
    } else {
      e = m - 1
    }
  }

  return null
}
