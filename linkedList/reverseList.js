const { LinkedList } = require("@datastructures-js/linked-list");


const list = new LinkedList()

list.insertLast(12)
list.insertLast(120)
list.insertLast(8)
list.insertLast(90)
list.insertLast(2)

console.log('input ')
let tmpHead = list.head()
while (tmpHead) {
  process.stdout.write(tmpHead.getValue() + ', ')
  tmpHead = tmpHead.getNext()
}
console.log('\nreversed ')
// let tmp = reverseRec(list.head())
// let tmp = reverse(list.head())
let tmp = reverse2(list.head(), 2, 4)
while (tmp) {
  process.stdout.write(tmp.getValue() + ', ')
  tmp = tmp.getNext()
}

// * reverse using recursion
function reverseRec(head) {
  if (!head.getNext()) {
    return head
  }
  const revHead = reverseRec(head.getNext())
  head.getNext().setNext(head)
  head.setNext(null)
  return revHead
}


function reverse(head) {
  if (!head) return null
  let prev = null
  let present = head
  let next = head.getNext()

  while (present) {
    present.setNext(prev)
    prev = present
    present = next
    if (next) {
      next = next.getNext()
    }
  }
  return prev
}


function reverse2(head, left, right) {
  if (!head) return head
  if (left === right) return head

  let prev = null
  let current = head
  let index = 0

  // * skip the first left-1 nodes
  for (let i = 0; i < left - 1 && current; i++) {
    prev = current
    current = current.getNext()
  }

  let last = prev
  let newEnd = current
  let next = current.getNext()

  for (let i = 0; i < right - left + 1 && current; i++) {
    current.setNext(prev)
    prev = current
    current = next
    if (next) {
      next = next.getNext()
    }
  }

  if (last) {
    last.setNext(prev)
  } else {
    head = prev
  }
  newEnd.setNext(current)
  return head
}