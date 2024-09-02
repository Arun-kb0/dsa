
class Stack{
  arr
  size
  pointer=-1

  constructor() {
    this.arr = []
    this.size = 0
  }

  push(value) {
    this.pointer++
    this.arr[this.pointer] = value
    this.size++
  }

  pop() {
    if (this.isEmpty()) {
      console.log('stack is empty')
      return
    }
    this.size--
    return this.arr[this.pointer--]
  }

  peak() {
    return this.arr[this.pointer]
  }

  isEmpty() {
    return this.pointer===-1
  }

}


const stack = new Stack()
stack.push(12)
stack.push(1)
stack.push(6)
stack.push(9)

console.log('peek  = ',stack.peak())
console.log(stack.pop())
console.log(stack.pop())

stack.push(45)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())