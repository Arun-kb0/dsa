// * subarray sum equals to k
// const nums = [1, 2, 3], k = 3
// const nums = [1, 1, 1], k = 2
// const nums = [-1, -1, 1], k = 0
const nums = [1, 2, 1, 2, 1], k = 3 //4

console.log(subarraySum(nums, k))

function subarraySum(nums, k) {
  const hashMap = new Map()
  hashMap.set(0, 1)
  let sum = 0, count = 0
  const n = nums.length

  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (hashMap.has(sum - k)) {
      count += hashMap.get(sum - k)
    }
    hashMap.set(sum, hashMap.get(sum) + 1 || 1)
  }
  return count
}