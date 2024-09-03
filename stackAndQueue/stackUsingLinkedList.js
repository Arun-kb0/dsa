
class Node {
  value
  next
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class Stack {
  head
  tail
  list
  size

  constructor() {
    this.list = null
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(value) {
    const newNode = new Node(value)
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

  pop() {
    if (!this.head) return console.log('stack is empty')
    if (this.head === this.tail) {
      const node = this.head
      this.head = null
      this.tail = null
      this.size--
      return node.value
    }
    let tmp = this.head
    let prev = null
    while (tmp.next) {
      prev = tmp
      tmp = tmp.next
    }
    const value = this.tail.value
    this.tail = prev
    prev.next = null
    this.size--
    return value
  }

  isEmpty() {
    return !this.head ? true : false
  }

  getSize() {
    return this.size
  }

  peak() {
    return this.tail.value
  }

  display() {
    if (!this.head) return console.log('stack is empty')
    let tmp =this.head
    while (tmp) {
      process.stdout.write(tmp.value + ', ')
      tmp =tmp.next
    }
    console.log()
  }

}

const stack = new Stack()
console.log(stack.isEmpty())
console.log(stack.getSize())

stack.push(22)
stack.push(2)
stack.push(21)
stack.push(89)
stack.display()

console.log(stack.peak())


// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
stack.display()




