class Node {
  value
  next

  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}


class CircularLinkedList {
  head
  tail

  insertEnd(value) {
    const headNode = this.head
    const newNode = new Node(value)
    if (!headNode) {
      this.head = newNode
      this.tail = newNode
      newNode.next = headNode
      return
    }
    const tailNode = this.tail
    newNode.next = headNode
    tailNode.next = newNode
    this.tail = newNode
  }

  delete(value) {
    let tmpNode = this.head
    if (!tmpNode) return console.log('list is empty')
    if (tmpNode.value === value) {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        return
      }
      this.tail.next = tmpNode.next
      this.head = tmpNode.next
      return
    }

    do {
      let prevNode  = tmpNode
      tmpNode = tmpNode.next
      if (tmpNode.value === value) {
        prevNode.next = tmpNode.next 
        break
      }
    } while (tmpNode !== this.head)

  }

  display() {
    let headNode = this.head
    if (headNode) {
      do {
        process.stdout.write(headNode.value + ', ')
        headNode = headNode.next
      } while (headNode !== this.head)
    }
  }

}



const cll = new CircularLinkedList()
cll.insertEnd(21)
cll.insertEnd(91)
cll.insertEnd(100)
cll.insertEnd(140)
cll.insertEnd(122)
cll.display()

console.log('\nafter deletion')
cll.delete(21)
cll.delete(122)
cll.delete(100)
cll.display()