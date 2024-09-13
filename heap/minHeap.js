class MinHeap {
  constructor(arr) {
    if (arr) {
      this.buildHeap(arr)
    } else {
      this.heap = []
    }
  }

  buildHeap(arr) {
    this.heap = arr
    for (let i = this.parent(arr.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  remove() {
    if (this.heap.length === 0) return console.log('invalid value')
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  shiftDown(currentIdx) {
    const endIdx = this.heap.length - 1
    let leftIdx = this.leftChild(currentIdx)

    while (leftIdx <= endIdx) {
      let idxToShift = null
      let rightIdx = this.rightChild(currentIdx)
      if (rightIdx <= endIdx && this.heap[leftIdx] > this.heap[rightIdx]) {
        idxToShift = rightIdx
      } else {
        idxToShift = leftIdx
      }

      if (this.heap[currentIdx] > this.heap[idxToShift]) {
        this.swap(this.heap, currentIdx, idxToShift)
        currentIdx = idxToShift
        leftIdx = this.leftChild(currentIdx)
      } else {
        return
      }
    }
  }

  shiftUp(currentIdx) {
    let parentIdx = this.parent(currentIdx)
    while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(this.heap, currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx)
    }
  }

  peek() {
    return this.heap[0]
  }

  parent(i) {
    return Math.floor((i - 1) / 2)
  }

  leftChild(i) {
    return i * 2 + 1
  }
  rightChild(i) {
    return i * 2 + 2
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  display() {
    for (let val of this.heap) {
      process.stdout.write(val + ', ')
    }
    console.log()
  }
}


// const heap = new MinHeap([10, 5, 25, 3, 30, 22, 12])
const heap = new MinHeap([2, 6, 8])
heap.insert(11)
heap.insert(15)
heap.display()

console.log('peek = ', heap.peek())
console.log('remove ')
heap.remove()
heap.display()