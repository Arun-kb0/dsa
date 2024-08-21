// * find first and last position of an element
// * leetcode 34

const nums = [5, 7, 7, 8, 8, 10], target = 8 // [3,4]
// const nums = [1], target = 1 // [0,0]
// const nums = [5, 7, 7, 8, 8, 10], target = 6 // [-1,-1] 
// const nums = [3, 3, 3], target = 3 // [0,2] 
// const nums = [3, 3, 3,3,3], target = 3 // [0,5] 
console.log(findFirstAndLastPosition(nums, target))

function findFirstAndLastPosition(nums, target) {
  if (nums.length === 0) return [-1, -1]
  let s = 0, e = nums.length - 1
  const result = [-1, -1]
  result[0] = binarySearch(s, e, target, false)
  result[1] = binarySearch(result[0], e, target, true)

  if (result[0] !== -1 && result[1] !== -1) {
    return result
  } else if (result[0] !== -1 && result[1] === -1) {
    return [result[0], result[0]]
  } else if (result[0] === -1 && result[1] !== -1) {
    return [result[1], result[1]]
  } else {
    return result
  }
}

function binarySearch(s, e, target, isLast) {
  let result = -1
  while (s <= e) {
    let m = Math.floor(s + (e - s) / 2)

    if (nums[m] === target) {
      if (isLast) {
        s = m + 1
      } else {
        e = m - 1
      }
      result = m
      // console.log('result ' , result)
    }else if (nums[m] < target) {
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return result
}