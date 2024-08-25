// * tree sum leetcode 15
// * return triplets that sum to zero
// * need to return array of arrays if multiple exists
// * other wise empty array


// const nums = [-1, 0, 1, 2, -1, -4]
// const nums = [0, 0, 0, 0]
// const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0]
// const nums = [1, 1, 1]
const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
//1 [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]  //len 9
const result = getThreeSumIsZero(nums)

console.log('result ', result.length)


function getThreeSumIsZero(nums) {
  const n = nums.length
  const result = []
  nums.sort((a, b) => a - b)

  // sub function
  const getTwoSum = (first, s, e) => {
    while (s < e) {
      let sum = first + nums[s] + nums[e]
      if (sum === 0) {
        result.push([first, nums[s], nums[e]])
        // * skip duplicates in the current iteration
        while (s < e && nums[s] === nums[s + 1]) s++
        while (s < e && nums[e] === nums[e - 1]) e--
        s++
        e--
      } else if (sum > 0) {
        e--
      } else {
        s++
      }
    }
  }


  //  main
  for (let i = 0; i < n; i++) {
    if ((i === 0 || nums[i] !== nums[i - 1])) {
      getTwoSum(nums[i], i + 1, n - 1)
    }
  }

  return result
}


