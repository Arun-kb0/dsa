class Node {
  value
  next
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

const arrayToLinkedList = (arr) => {
  if (!arr || arr.length === 0) return null
  const head = new Node(arr[0])
  let current = head

  for (let i = 0; i < arr.length; i++) {
    current.next = new Node(arr[i])
    current = current.next
  }
  return head
}


const arr = [1, 2, 3, 4, 5, 1]
let head = arrayToLinkedList(arr)
while (head) {
  process.stdout.write(head.value + ', ')
  head = head.next
}