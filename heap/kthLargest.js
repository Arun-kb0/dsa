const KthLargest = function (k, nums) {
  this.k = k
  this.heap = nums
  this.parent = (i) => Math.floor((i - 1) / 2)
  this.leftChild = (i) => 2 * i + 1
  this.rightChild = (i) => 2 * i + 2
  this.swap = (i, j) => {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  this.shiftDown = (currentIdx) => {
    const endIdx = this.heap.length - 1
    let leftIdx = this.leftChild(currentIdx)
    while (currentIdx <= endIdx) {
      let idxToShift = null
      let rightIdx = this.rightChild(currentIdx)
      if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
        idxToShift = rightIdx
      } else {
        idxToShift = leftIdx
      }

      if (this.heap[currentIdx] > this.heap[idxToShift]) {
        this.swap(currentIdx, idxToShift)
        currentIdx = idxToShift
        leftIdx = this.leftChild(currentIdx)
      } else {
        return
      }
    }
  }
  this.shiftUp = (currentIdx) => {
    let parentIdx = this.parent(currentIdx)
    while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = this.parent(currentIdx)
    }
  }

  this.remove = () => {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  this.insert = (value) => {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  this.peak = () => this.heap[0]


  this.buildHeap = () => {
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  // * creating this.heap
  this.buildHeap()
  // * keeping values of size k
  const removeCount = nums.length - k + 1
  for (let i = 1; i < removeCount; i++) {
    this.remove()
  }

}


KthLargest.prototype.add = function (val) {
  this.insert(val)
  if (this.heap.length > this.k) {
    this.remove()
  }
  // console.log(this.heap)
  return this.peak()
}


const nums = [4, 5, 8, 2], k = 3
const valuesToAdd = [3, 5, 10, 9, 4]
// add [3],[5],[10],[9],[4]
// out 4, 5, 5, 8, 8

// const nums = [7, 7, 7, 7, 8, 3], k = 4
// const valuesToAdd = [2, 10, 9, 9]
// [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
//out  [null, 7, 7, 7, 8]


// const nums = [0], k = 2
// const valuesToAdd = [-1, 1, -2, -4, 3]
// [[2, [0]], [-1], [1], [-2], [-4], [3]]

const kthLargest = new KthLargest(k, nums)
for (let value of valuesToAdd) {
  process.stdout.write(kthLargest.add(value)+', ')
}
