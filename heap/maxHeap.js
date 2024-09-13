
class MaxHeap {
  constructor() {
    this.heap = []
  }

  sort() {
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this.swap(this.heap, 0, i)
      this.shiftDown(0, i - 1)
    }
  }

  remove() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  buildHeap(arr) {
    this.heap = arr
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  shiftDown(currentIdx, endIdx = this.heap.length - 1) {
    let leftIdx = this.leftChild(currentIdx)

    while (leftIdx <= endIdx) {
      let rightIdx = this.rightChild(currentIdx)
      let idxToShift = null
      if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
        idxToShift = rightIdx
      } else {
        idxToShift = leftIdx
      }
      if (this.heap[currentIdx] < this.heap[idxToShift]) {
        this.swap(this.heap, currentIdx, idxToShift)
        currentIdx = idxToShift
        leftIdx = this.leftChild(currentIdx)
      } else {
        return
      }

    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  shiftUp(currentIdx) {
    let parentIdx = this.parent(currentIdx)
    while (currentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
      this.swap(this.heap, currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx)
    }
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  parent(i) { return Math.floor((i - 1) / 2) }
  leftChild(i) { return 2 * i + 1 }
  rightChild(i) { return 2 * i + 2 }
  display() { console.log(this.heap) }

}


const maxHeap = new MaxHeap()
maxHeap.buildHeap([5, 2, 7, 8, 6])
maxHeap.insert(8)
maxHeap.display()
console.log('remove')
maxHeap.remove()
maxHeap.remove()
maxHeap.display()

// console.log('sort heap ')
// maxHeap.sort()
// maxHeap.display()
