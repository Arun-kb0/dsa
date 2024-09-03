
class Queue {
  arr
  end

  constructor() {
    this.arr = []
    this.end = -1
  }

  insert(value) {
    this.arr.push(value)
    this.end++
  }

  isEmpty() {
    return this.end===0
  }

  front() {
    return this.arr[0]
  }

  remove() {
    const value = this.arr[0]
    this.arr.shift()
    // for (let i = 1; i < this.end; i++){
    //   this.arr[i-1] = this.arr[i]
    // }
    this.end--
    return value
  }

  display() {
    console.log(this.arr)
  }

}

const queue = new Queue()
queue.insert(10)
queue.insert(12)
queue.insert(13)
queue.display()

// console.log(queue.isEmpty())
console.log(queue.front())
// console.log(queue.remove())
// console.log(queue.remove())


