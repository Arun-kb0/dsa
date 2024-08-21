// ! not finished

// const p = 'abc'
// const s = "abcabcbb"
// console.log('check anagram = ', checkAnagram(p, s))

function checkAnagram(p, s) {
  let pCount = new Map()
  let sCount = new Map()

  for (let i = 0; i < p.length; i++) {
    pCount.set(p[i], pCount.get(p[i]) + 1 || 1)
  }
  for (let i = 0; i < s.length; i++) {
    sCount.set(s[i], sCount.get(s[i]) + 1 || 1)
  }

  const result = []
  let count = 0
  for (let i = 0; i < p.length; i++) {
    if (pCount.has(p[i]) === sCount.has(p[i])) {
      pCount.set(pCount.get(p[i]) - 1)
      if (pCount.get(p[i]) === 0) {
        pCount.delete(p[i])
      }
      count++
    }
    if (count === p.length) {
      result.push(count - i)
      count = 0
    }
  }
  return result
}


const p = 'cab'
const s = 'abc'

// const p = 'cabs'
// const s = 'abca'
console.log('is anagram ', checkStringsAreAnagram(p, s))

function checkStringsAreAnagram(p, s) {
  if (s.length !== p.length) return false
  const strP = sort(p)
  const strS = sort(s)
  return strP === strS
}

function sort(str) {
  const arr = str.split('')
  const n = str.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr.join('')
}