class Node {
  value
  next
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class CircularLinkedListTest {
  head
  tail

  insert(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
    this.tail.next = this.head
  }

  delete(value) {
    if (!this.head) return console.log('list is empty')
    let tmpNode = this.head
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
      let prevNode = tmpNode
      tmpNode = tmpNode.next
      if (tmpNode.value === value) {
        prevNode.next = tmpNode.next
        break
      }
    } while (tmpNode !== this.head)
  }

  display() {
    if (!this.head) return console.log('list is empty')
    let tmpNode = this.head
    do {
      process.stdout.write(tmpNode.value + ", ")
      tmpNode = tmpNode.next
    } while (tmpNode !== this.head)
  }
}


const cll = new CircularLinkedListTest()
cll.insert(12)
cll.insert(2)
cll.insert(152)
cll.insert(120)

cll.display()

console.log('\nafter deletion ')
cll.delete(120)
cll.delete(2)
cll.display()
