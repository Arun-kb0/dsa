
class Node {
  value
  next
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class Queue {
  head
  tail
  size

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.size++
      return
    }
    this.tail.next = newNode
    this.tail = newNode
    this.size++
  }

  remove() {
    if (!this.head) return console.log('queue is empty')
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  isEmpty() {
    return this.head ? false :true
   }

  getSize() { 
    return this.size
  }

  display() {
    let tmp = this.head
    while (tmp) {
      process.stdout.write(tmp.value+', ')
      tmp =tmp.next
    }
    console.log()
  }
}


const queue = new Queue()
// console.log(queue.isEmpty())
// console.log(queue.getSize())

queue.insert(2)
queue.insert(22)
queue.insert(43)
queue.insert(53)
queue.display()

console.log(queue.remove())
console.log(queue.remove())
// console.log(queue.remove())
// console.log(queue.remove())
queue.display()
console.log(queue.isEmpty())
console.log(queue.getSize())




