// * sort linked list

const { SLL, Node } = require("../practice/sLinkedList")


const sll = new SLL()
sll.insertLast(6)
sll.insertLast(10)
sll.insertLast(22)
sll.insertLast(2)
sll.insertLast(1)
sll.display()

console.log('\nafter sort ')
// let resHead = sortSLL(sll.head)
let resHead = mergeSort(sll.head)
while (resHead) {
  process.stdout.write(resHead.value + ', ')
  resHead = resHead.next
}

// * merge sort
function mergeSort(head) {
  if (!head.next) return head

  const start = head
  const mid = getMid(head)
  const tmp = mid.next
  mid.next = null

  const first = mergeSort(start)
  const second = mergeSort(tmp)
  return merge(first, second)
}

function merge(first, second) {
  let head = new Node()
  let tmp = head

  while (first && second) {
    if (first.value < second.value) {
      tmp.next = first
      first = first.next
    } else {
      tmp.next = second
      second = second.next
    }
    tmp = tmp.next
  }

  if (first) {
    tmp.next =first
  } else if (second) {
    tmp.next =second
  }

  return head.next
}

function getMid(head) {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    if (fast) {
      fast = fast.next.next
    }
  }
  return slow
}


// * normal sort 
function sortSLL(head) {
  const arr = []
  let tmp = head
  while (tmp) {
    arr.push(tmp.value)
    tmp = tmp.next
  }

  arr.sort((a, b) => a - b)

  tmp = head
  for (let num of arr) {
    tmp.value = num
    tmp = tmp.next
  }

  return head
}
