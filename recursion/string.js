// const str = 'hellohih', target = 'h'
// console.log(removeCharacter(str, target))
// console.log(insertCharacter(str, '-'))
// console.log(removeDup(str))
// printSubsequence("abc")
// console.log(removeTargetFromString('abcdas', 'a'))
// console.log(skipString('appapplegrape', 'pe'))
console.log(findSubstrings('abc'))


function findSubstrings(up = '', p = '', result = []) {
  if (up.length === 0) {
    result.push(p)
    return 
  }
  findSubstrings(up.substring(1), p + up[0], result)
  findSubstrings(up.substring(1), p, result)
  return result
}



function skipString(str = '', target = '', processed = '') {
  if (str.length === 0) return processed
  if (str.startsWith(target)) {
    return skipString(str.substring(target.length), target, processed)
  } else {
    processed += str[0]
    return skipString(str.substring(1), target, processed)
  }
}


function removeTargetFromString(str = '', target, processed = '') {
  if (str.length === 0) return processed
  const char = str[0]
  if (char === target) {
    return removeTargetFromString(str.substring(1), target, processed)
  } else {
    processed += char
    return removeTargetFromString(str.substring(1), target, processed)
  }
}



function printSubsequence(str, i = 0, result = '') {
  if (i === str.length) {
    if (result) {
      console.log(result.split('').reverse().join(''))
    }
    return
  }

  printSubsequence(str, i + 1, result + str[i])
  printSubsequence(str, i + 1, result)
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