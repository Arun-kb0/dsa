const { LinkedList, LinkedListNode } = require('@datastructures-js/linked-list')

// * leetcode 142
// * Given the head of a linked list, return the node where the cycle begins.
// *  If there is no cycle, return null.



// * list with cycle start

const list = new LinkedList()

list.insertLast(3)
list.insertLast(2)
list.insertLast(1)
list.insertLast(19)
list.insertLast(31)
list.insertLast(321)
list.insertLast(1)
list.insertLast(921)
list.insertLast(11)

console.log(list.head().getNext().getNext().getNext().getValue())
let cycleStartNode = list.head().getNext().getNext().getNext()
let lastNode = list.head()
while (lastNode.hasNext()) {
  lastNode = lastNode.getNext()
}
lastNode.setNext(cycleStartNode)
// * list with cycle end

// * normal list
const node = new LinkedListNode()

const list2 = new LinkedList()
list2.insertLast(12)
list2.insertLast(32)
list2.insertLast(122)
list2.insertLast(92)

console.log('start of the cycle ', findTheStartOfTheCycle(list.head()).getValue())
console.log('start of the cycle ', findTheStartOfTheCycle(list2.head()))


function findTheStartOfTheCycle(head) {
  let slow = head
  let fast = head.getNext()
  let length = 0

  while (fast && fast.hasNext()) {
    fast = fast.getNext().getNext()
    slow = slow.getNext()
    if (fast === slow) {
      length = lengthOfCycle(slow)
      console.log(length)
      break
    }
  }

  if (length === 0) return null

  let f = head
  let s = head

  while (length > 0) {
    s = s.getNext()
    length--
  }

  while (f!==s) {
    f = f.getNext()
    s = s.getNext()
  }
  return s
}


function lengthOfCycle(node) {
  let tmp = node
  let length = 0
  do {
    tmp = tmp.getNext()
    length++
  } while (tmp !== node)
  return length
}