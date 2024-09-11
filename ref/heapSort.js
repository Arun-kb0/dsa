class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }


    remove() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

   
    heapifyDown(index) {
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
        let largest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);  // Recursive call
        }
    }

    buildHeap(arr) {
        this.heap = [...arr];
        for (let i = this.getParentIndex(this.heap.length - 1); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

   
    recursiveHeapSort() {
        if (this.heap.length === 0) return [];
        let maxElement = this.remove();
        let sortedArray = this.recursiveHeapSort();
        sortedArray.push(maxElement);
        return sortedArray;
    }
}


function heapSort(arr) {
    let maxHeap = new MaxHeap();
    maxHeap.buildHeap(arr);
    return maxHeap.recursiveHeapSort();
}

// Example usage
let array = [12, 11, 13, 5, 6, 7];
let sortedArray = heapSort(array);
console.log("Sorted array is:", sortedArray);
