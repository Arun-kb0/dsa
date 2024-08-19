const { LinkedList } = require("@datastructures-js/linked-list");

const list = new LinkedList()

list.insertLast(1)
list.insertLast(21)
list.insertLast(31)
list.insertLast(2)
list.insertLast(1)

const list2 = new LinkedList()

list2.insertLast(1)
list2.insertLast(2)
list2.insertLast(3)
list2.insertLast(2)
list2.insertLast(1)

// checkPalindrome(list.head())
// console.log("is palindrome ", checkPalindrome(list.head()))
// console.log("is palindrome ", checkPalindrome(list2.head()))

console.log("is palindrome ", checkPalindrome2(list.head()))
console.log("is palindrome ", checkPalindrome2(list2.head()))

// * optimal way
function checkPalindrome(head) {
  let mid = getMiddle(head)
  let secondHead = reverse(mid)
  let reveredHead = secondHead

  // * compare
  while (secondHead && head) {
    if (secondHead.getValue() !== head.getValue()) {
      return false
    }
    secondHead = secondHead.getNext()
    head = head.getNext()
  }
  reverse(reveredHead)
  return true
}

function getMiddle(head) {
  let slow = head
  let fast = head.getNext()
  let count = 0

  while (fast && fast.hasNext()) {
    slow = slow.getNext()
    fast = fast.getNext().getNext()
    count++
  }

  return slow
}

function reverse(head) {
  // console.log(head)
  let prev = null
  let current = head
  let next = head.getNext()

  while (current) {
    current.setNext(prev)
    prev = current
    current = next
    if (next) {
      next = next.getNext()
    }
  }
  return prev
}


function checkPalindrome2(head) {
  let str1 ='',str2=''
  while (head) {
    str1 = `${str1}${head.getValue()}`
    str2 = `${head.getValue()}${str2}`
    head = head.getNext()
  }
  console.log('str1',str1)
  console.log('str2 ',str2 )
  return str1===str2
}

