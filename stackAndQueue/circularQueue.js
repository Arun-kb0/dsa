
class CircularQueue {
  constructor(defaultSize = 5) {
    this.data = new Array(defaultSize)
    this.size = 0
    this.front = 0
    this.end = 0
  }

  peek() {
    if(this.isEmpty()) return console.log('queue is empty')
    return this.data[this.front]
  }

  enqueue(value) {
    if (this.isFull()) return console.log('queue is full')
    this.data[this.end++] = value
    this.end %= this.data.length
    this.size++
  }

  dequeue() {
    if (this.isEmpty()) return console.log('queue is empty')
    const removed = this.data[this.front++]
    this.front %= this.data.length
    this.size--
    return removed
  }

  display() {
    let i = this.front
    let result = ''
    for (let c = 0; c < this.size; c++) {
      result += this.data[i] + ', '
      i++
      i %= this.data.length
    }
    console.log(result)
  }

  isEmpty() {
    return this.size === 0
  }

  isFull() {
    return this.size === this.data.length
  }

}

const circularQueue = new CircularQueue()
circularQueue.enqueue(10)
circularQueue.enqueue(45)
circularQueue.enqueue(12)
circularQueue.enqueue(20)
circularQueue.enqueue(22)
circularQueue.enqueue(132)
circularQueue.display()

circularQueue.dequeue()
circularQueue.dequeue()
console.log('peek = ',circularQueue.peek())
circularQueue.enqueue(232)
circularQueue.display()