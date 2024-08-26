// ! not finished

// const p = 'cab', s = 'abc'
const s = "anagram", p = "nagaram"
console.log('check anagram = ', checkAnagram(p, s))

function checkAnagram(p, s) {
  if (p.length !== s.length) return false
  let pCount = new Map()
  let sCount = new Map()
  const n = p.length

  for (let i = 0; i < n; i++) {
    pCount.set(p[i], pCount.get(p[i]) + 1 || 1)
    sCount.set(s[i], sCount.get(s[i]) + 1 || 1)
  }
  console.log(pCount)
  console.log(sCount)
  for (let i = 0; i < n; i++) {
    if (pCount.get(s[i]) !== sCount.get(s[i])) {
      return false
    }
  }
  return true
}


// const p = 'cab'
// const s = 'abc'
// const p = 'cabs'
// const s = 'abca'
// console.log('is anagram ', checkStringsAreAnagram(p, s))

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


function anagramOpt() {

}