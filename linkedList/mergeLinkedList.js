const { LinkedList } = require('datastructures-js')

const list1 = new LinkedList()
list1.insertLast(10)
list1.insertLast(11)
list1.insertLast(12)
const list2 = new LinkedList()
list2.insertLast(20)
list2.insertLast(21)
list2.insertLast(22)

let result = mergeLinkedLists(list1.head(), list2.head())
while (result) {
  process.stdout.write(result.value+', ')
  result = result.getNext()
}

function mergeLinkedLists(list1, list2) {
  let f = list1
  let s = list2
  let result = new LinkedList()

  while (f) {
    if (!result.head()) {
      result.head()
    }
    result.insertLast(f.getValue())
    f = f.getNext()
  }
  while (s) {
    result.insertLast(s.getValue())
    s = s.getNext()
  }
  return result.head()
}