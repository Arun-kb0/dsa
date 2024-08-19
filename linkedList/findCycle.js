const { LinkedList, LinkedListNode } = require('@datastructures-js/linked-list')

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

console.log(list.head().getNext())
let cycleStartNode = list.head().getNext()
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


console.log('is cycle present ', checkCycle(list.head()))
console.log('is cycle present ', checkCycle(list2.head()))

console.log('length of cycle', findLengthOfCycle(list.head()))
console.log('length of cycle', findLengthOfCycle(list2.head()))


function checkCycle(head) {
  let fast = head.getNext()
  let slow = head
  while (fast && fast.hasNext()) {
    fast = fast.getNext().getNext()
    slow = slow.getNext()
    if (fast === slow) {
      return true
    }
  }
  return false
}


function findLengthOfCycle(head) {
  if (!head) return 0
  let count=0
  let slow = head
  let fast = head.getNext()
  while (fast && fast.hasNext()) {
    slow = slow.getNext()
    fast = fast.getNext().getNext()
    if (slow === fast) {
      let tmp = slow
      do {
        tmp = tmp.getNext()
        count++
      }while(tmp!==slow)
      break
    }
  }
  return count
}


