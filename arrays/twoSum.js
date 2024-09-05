

// const nums = [2, 7, 11, 15], target = 9  // out [0,1]
// const nums = [3, 2, 4], target = 6 // out [1,2]
// const nums = [3,2, 3], target = 6 // out [0,1]
// const nums = [0, 4, 3, 0], target = 0 //out [0,3]
// const nums = [-1, -2, -3, -4, -5], target = -8 //out [2,4]
// const nums = [-1, 2, -3, -4, -5], target = -1 //out [1,2]
const nums = [3, 2, 95, 4, -3], target = 92 //out [2,4]

console.log(twoSum(nums, target))


function twoSum(nums, target) {
  const hashMap = new Map()
  const n = nums.length
  const result = [-1, -1]

  for (let i = 0; i < n; i++) {
    if (hashMap.has(nums[i])) {
      result[0] = hashMap.get(nums[i])
      result[1] = i
      hashMap.delete(nums[i])
      break
    }
    let key =  target - nums[i]
    hashMap.set(key, i)
  }
  return result
};