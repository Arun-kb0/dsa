const { Stack } = require('./stack')


class QueueUsingStack {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
    this.size=0
  }

  push(value) {
    this.stack1.push(value)
    this.size++
  }

  pop() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
    const value = this.stack2.pop()
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }
    return value
  }

  peek() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
    const value = this.stack2.peak()
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }
    return value
  }

  isEmpty() {
    return this.stack1.isEmpty()
  }

}


const queue = new QueueUsingStack()
queue.push(2)
queue.push(6)
queue.push(1)
queue.push(7)

console.log('pop = ',queue.pop())
console.log('peek = ',queue.peek())
console.log('isEmpty = ',queue.isEmpty())