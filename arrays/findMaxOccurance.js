// const nums = [1, 3, 2, 1, 4, 1]
// const nums = [1, 3, 3, 4, 2, 1, 4, 3, 1, 3, 2, 12, 3]
// const nums = [2]
const nums = [10, 20, 10, 20, 30, 20, 20]

console.log('most frequent element ', findMaxOccurrence(nums))

function findMaxOccurrence(nums) {
  if(nums.length===0) return null
  const n = nums.length
  const hashMap = new Map()
  let max = 0, element = 0

  for (let i = 0; i < n; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) + 1 || 1))
    if (hashMap.get(nums[i]) > max) {
      max = hashMap.get(nums[i])
      element = nums[i]
    }
  }

  return element
}