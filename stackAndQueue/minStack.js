// * leetcode 155
// * deDesign a stack that supports push, pop, top,
// * and retrieving the minimum element in constant time.


class CustomStack {
  constructor() {
    this.minStack=[]
    this.arr = []
    this.size = 0
  }

  minimum() {
    return this.minStack[this.minStack.length-1]
  }

  push(value) {
    const currentMin = this.minStack.length>0
      ? this.minStack[this.minStack.length - 1] 
      : Number.MAX_VALUE
    const min = Math.min(currentMin, value)
    this.minStack.push(min)
    this.arr.push(value)
    this.size++
  }

  pop() {
    const value = this.arr.pop()
    this.minStack.pop()
    this.size--
    return value
  }

  top() {
    return this.arr[this.arr.length - 1]
  }
}


const cStack = new CustomStack()
cStack.push(29)
cStack.push(5)
cStack.push(19)
cStack.push(2)
console.log("min value = ", cStack.minimum())

console.log('after pop ')
console.log(cStack.pop())
console.log(cStack.pop())

console.log("min value = ", cStack.minimum())