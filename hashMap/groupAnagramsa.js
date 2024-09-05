const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(strs))

function groupAnagrams(strs) {
  const hashMap = new Map()

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('')
    hashMap.set(sortedStr, [])
  }
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('')
    if (hashMap.has(sortedStr)) {
      hashMap.get(sortedStr).push(str)
    }
  }
  return Array.from(hashMap.values())
}