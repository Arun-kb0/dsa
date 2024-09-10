// const s = "axxxxyyyyb", part = "xy"
// const s = "daabcbaabcbc", part = "abc" //dab
console.log(removeOccurrences(s, part))

function removeOccurrences(s = '', part = '') {
  const n = s.length
  while (s.includes(part)) {
    s= s.replace(part, '')
  }
  return s
}
