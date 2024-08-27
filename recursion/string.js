// const str = 'hellohih', target = 'h'
// console.log(removeCharacter(str, target))
// console.log(insertCharacter(str, '-'))
// console.log(removeDup(str))
printSubsequence("abc")


function printSubsequence(str, i = 0, result = '') {
  if (i === str.length) {
    if (result) {
      console.log(result.split('').reverse().join(''))
    }
    return
  }

  printSubsequence(str, i+1, result + str[i])
  printSubsequence(str, i+1, result)
}


function removeDup(str, i = 0, set = new Set()) {
  if (i === str.length) return [...set].join('')
  set.add(str[i])
  i++
  return removeDup(str, i, set);
}

function insertCharacter(str, char, i = 0, result = '') {
  if (i === str.length) return result
  if (i !== str.length - 1) {
    result += str[i] + char
  } else {
    result += str[i]
  }
  i++
  return insertCharacter(str, char, i, result)
}

function removeCharacter(str, target, i = 0, result = '') {
  if (i === str.length) return result
  if (str[i] !== target) result += str[i]
  i++
  return removeCharacter(str, target, i, result)
}