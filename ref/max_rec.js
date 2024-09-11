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

    insert(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

   
    heapifyUp(index) {
        if (index <= 0) return;

        let parentIndex = this.getParentIndex(index);

        if (this.heap[parentIndex] < this.heap[index]) {
            this.swap(parentIndex, index);
            this.heapifyUp(parentIndex);  // Recursive call
        }
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
}

// Example usage
let maxHeap = new MaxHeap();
maxHeap.buildHeap([10, 20, 15, 30, 40]);
maxHeap.insert(50);
console.log(maxHeap.heap); // Output the max heap
console.log(maxHeap.remove()); // Remove the root element
console.log(maxHeap.heap); // Output the max heap after removal
