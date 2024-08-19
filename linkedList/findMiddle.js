const { LinkedList } = require('@datastructures-js/linked-list')


const list = new LinkedList()
list.insertLast(10)
list.insertLast(20)
list.insertLast(1)
list.insertLast(199)
list.insertLast(90)
list.insertLast(92)
list.insertLast(12)

console.log('middle of the list = ', getMiddle(list.head()).getValue())


function getMiddle(head) {
  let slow = head
  let fast = head.getNext()

  while (fast && fast.getNext()) {
    fast = fast.getNext().getNext()
    slow = slow.getNext()
  }
  return slow
}