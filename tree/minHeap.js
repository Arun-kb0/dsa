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
    for (let i = parent(heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  insert() { }

  shiftDown(currentIdx) {
    const endIdx = heap.length - 1
    let leftIdx = this.leftChild(currentIdx)
    while (leftIdx <= endIdx) {
      let rightIdx = this.rightChild(currentIdx)
      let idxToShift = null
      if (rightIdx < endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
        idxToShift = rightIdx
      } else {
        idxToShift = leftIdx
      }

      if (this.heap[currentIdx] > this.heap[idxToShift]) {
        this.swap(this.heap, currentIdx, idxToShift)
        currentIdx = idxToShift
        leftIdx = leftIdx(currentIdx)
      } else {
        return
      }
    }
  }

  shiftUp(currentIdx) {
    let parentIdx = parentIdx(currentIdx)
    while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(this.heap, parentIdx, currentIdx)
      currentIdx = parentIdx
      parentIdx = parent(currentIdx)
    }
  }

  peek() { 
    return this.heap[0]
  }

  parent(i) {
    return Math.floor(i - 1 / 2)
  }

  leftChild(i) {
    return i * 2 + 1
  }
  rightChild(i) {
    return i * 2 + 2
  }

  swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  display() {
    for (let val of heap) {
      process.stdout.write(val + ', ')
    }
    console.log()
  }
}