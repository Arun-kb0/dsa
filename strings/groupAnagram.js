// * group anagrams together
// * leetcode 49


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// const strs = [""]
// Output: [[""]]
// const strs = ["a"]
// Output: [["a"]]
const strs1 = ["", ""]
// Output: [[""]]


console.log('group anagrams together ', groupAnagrams(strs))
console.log('group anagrams together ', groupAnagrams(strs1))

function groupAnagrams(strs) {
  if (strs.length === 1) return [[strs[0]]]
  const n = strs.length
  const result = new Map()

  for (let str of strs) {
    const sortedStr = str.split('').sort().join()
    if (!result.has(sortedStr)) {
      result.set(sortedStr,[str])
    } else {
      result.get(sortedStr).push(str)
    }
  }
  return Array.from(result.values())
}