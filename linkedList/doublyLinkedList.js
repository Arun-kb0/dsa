
class Node {
  value
  next
  prev

  constructor(value, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class DoublyLinkedList {
  head
  size

  insertStart(value) {
    const newNode = new Node(value)
    if (!this.head) {
      newNode.prev = null
      this.head = newNode
      this.size++
      return
    }
    const headNode = this.head
    headNode.prev = newNode
    newNode.next = headNode
    this.head = newNode
    this.size++
  }

  insertEnd(value) {
    let node = this.head
    if (!node) return this.insertStart(value)
    const newNode = new Node(value)
    while (node.next) {
      node = node.next
    }
    node.next = newNode
    newNode.prev = node
    this.size++
  }

  insert(value, valueToAddAfter) {
    const tmpNode = this.find(valueToAddAfter)
    if (!tmpNode) return console.log('not found')
    const newNode = new Node(value)
    newNode.next = tmpNode.next
    newNode.prev = tmpNode
    if (tmpNode.next) {
      tmpNode.next.prev = newNode
    }
    tmpNode.next = newNode
    this.size++
  }

  deleteFirst() {
    if (!this.head) return console.log('list is empty')
    const tmpNode = this.head
    this.head = tmpNode.next
    this.head.prev = null
    this.size--
  }

  deleteLast() {
    if (this.size <= 1) return this.deleteFirst()
    let tmpNode = this.head
    while (tmpNode.next) {
      tmpNode = tmpNode.next
    }
    tmpNode.prev.next = null
    tmpNode.prev = null
    this.size--
  }

  delete(value) {
    const tmpNode = this.find(value)
    if (!tmpNode) return console.log('value not found')
    if (!tmpNode.prev) return this.deleteFirst()
    if (!tmpNode.next) return this.deleteLast()
    tmpNode.prev.next = tmpNode.next
    tmpNode.next.prev = tmpNode.prev
  }

  find(value) {
    let tmpNode = this.head
    while (tmpNode) {
      if (tmpNode.value === value) {
        return tmpNode
      }
      tmpNode = tmpNode.next
    }
    return null
  }



  display() {
    let node = this.head
    while (node) {
      process.stdout.write(node.value + ', ')
      node = node.next
    }
  }

  displayRev() {
    // * traverse reverse without tail
    let node = this.head
    while (node.next) {
      node = node.next
    }
    while (node) {
      process.stdout.write(node.value + ', ')
      node = node.prev
    }
  }

}


const dll = new DoublyLinkedList()
dll.insertEnd(10)
dll.insertStart(102)
dll.insertStart(87)
dll.insertStart(18)
dll.insertEnd(99)
dll.insertEnd(21)

dll.display()
// console.log('\nin reverse')
// dll.displayRev()

console.log('\ninsert after')
dll.insert(1992, 87)
// dll.insert(1921, 21)
dll.display()

console.log('\nafter deletion')
dll.deleteFirst()
dll.deleteLast()
dll.delete(102)
dll.delete(87)

dll.display()
console.log()
dll.displayRev()

// console.log('\nhead', dll.head.value)