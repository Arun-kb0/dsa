// const strs = ["apple", "banana", "grape", "kiwi", "pear"]
// console.log('input = ', strs)
// sortStringAlphabeticallyRev(strs)
// console.log('output = ',strs)


const persons = [{ name: "Alice", age: 34 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 28 }]
sortPersonsByAge(persons)
console.log(persons)

function sortPersonsByAge(persons = [], low = 0, heigh = persons.length - 1) {
  if (low >= heigh) return
  let s = low, e = heigh
  const m = Math.floor(s + (e - s) / 2)
  const pivot = persons[m]?.age

  while (s < e) {
    while (persons[s]?.age < pivot) s++
    while (persons[e]?.age > pivot) e--
    if (s <= e) {
      const tmp = persons[s]
      persons[s] = persons[e]
      persons[e] = tmp
      s++
      e--
    }
  }
  sortPersonsByAge(persons, low, e)
  sortPersonsByAge(persons, s, heigh)
}

function sortStringAlphabeticallyRev(strs = [], low = 0, heigh = strs.length - 1) {
  if (low >= heigh) return
  let s = low, e = heigh
  let mid = Math.floor(s + (e - s) / 2)
  let pivot = strs[mid]

  while (s <= e) {
    while (strs[s] >= pivot) s++
    while (strs[e] < pivot) e--
    if (s < e) {
      const tmp = strs[s]
      strs[s] = strs[e]
      strs[e] = tmp
      s++
      e--
    }
  }

  sortStringAlphabeticallyRev(strs, low, e)
  sortStringAlphabeticallyRev(strs, s, heigh)
}