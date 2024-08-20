

// * node
class Node {
  value
  next

  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

// * list
class SinglyLinkedList {
  head = null
  tail = null
  size = null

  SinglyLinkedList() {
    this.size = 0
  }


  insertStart(value) {
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    if (!this.tail) {
      this.tail = this.head
    }
    this.size++
  }

  insertEnd(value) {
    if (!this.tail) return this.insertStart(value)
    let newNode = new Node(value)
    let tmpNode = this.head
    while (tmpNode.next) {
      tmpNode = tmpNode.next
    }
    this.tail.next = newNode
    this.tail = newNode
    this.size++

    // * insert without a tail
    // if (!tmpNode.next) {
    //   tmpNode.next = newNode
    // }
  }

  insert(value, index) {
    if (this.size < index) return console.log(`insertion at index ${index} failed`)
    if (index === 0) return this.insertStart(value)
    if (index === this.size) return this.insertEnd(value)
    let newNode = new Node(value)
    let tmpNode = this.head
    let prevNode = null
    let count = 0
    while (tmpNode) {
      if (count === index) break
      prevNode = tmpNode
      tmpNode = tmpNode.next
      count++
    }
    let node = new Node(value, tmpNode.next)
    // if (count === index) {
    //   prevNode.next = newNode
    //   newNode.next = tmpNode
    //   return
    // }
  }

  deleteFirst() {
    if (!this.head) return console.log('list is empty')
    if (!this?.head?.next) {
      this.head = null
      this.tail = null
      this.size--
      return
    }
    this.head = this.head.next
    this.size--
  }

  deleteLast() {
    if (this.size === 0) return console.log('list is empty')
    if (this.size === 1) return this.deleteFirst()
    const tmpNode = this.get(this.size - 2)
    this.tail = tmpNode
    this.tail.next = null
    this.size--
  }

  delete(index) {
    if (index > this.size - 1) return console.log('invalid index')
    if (index === 0) return this.deleteFirst()
    const prevNode = this.get(index - 1)
    prevNode.next = prevNode.next.next
    this.size--
  }

  get(index) {
    let count = 0
    let tmpNode = this.head
    while (tmpNode) {
      if (count === index) return tmpNode
      tmpNode = tmpNode.next
      count++
    }
    return null
  }

  deleteValue(value) {
    let tmpNode = this.head
    let prev = null
    if (tmpNode.value === value) {
      this.head = tmpNode.next
      return
    }
    while (tmpNode) {
      if (value === tmpNode.value) {
        break
      }
      prev = tmpNode
      tmpNode = tmpNode.next
    }
    if (prev) {
      prev.next = tmpNode.next
    } else {
      console.log('no value found')
    }
  }

  insertBeforeAndAfter(target, value1, value2) {
    const node1 = new Node(value1)
    const node2 = new Node(value2)
    let tmpNode = this.head

    if (tmpNode.value === target) {
      node1.next = tmpNode
      this.head = node1
      node2.next = tmpNode.next
      tmpNode.next = node2
      return
    }

    let prev=null
    while (tmpNode) {
      if (tmpNode.value === target) {
        break
      }
      prev  = tmpNode
      tmpNode = tmpNode.next
    }

    if (tmpNode) {
      node1.next = tmpNode
      prev.next = node1
      node2.next = tmpNode.next
      tmpNode.next = node2
      return
    }
    console.log('no target found')
  }

  display() {
    let tmpNode = this.head
    while (tmpNode) {
      // console.log(tmpNode.value)
      process.stdout.write(tmpNode.value + ", ");
      tmpNode = tmpNode.next
    }
  }

  displayReverse() {
    const tmpNode = this.head
    this.displayReverseHelper(tmpNode)
  }
  displayReverseHelper(tmpNode) {
    if(!tmpNode) return
    this.displayReverseHelper(tmpNode.next)
    process.stdout.write(tmpNode.value+', ')
  }
  


  // * insert using recursion
  insertRec(value, index) {
    this.head = this.insertRecHelper(index, value, this.head)
  }

  insertRecHelper(index, value, node) {
    if (index === 0) {
      const newNode = new Node(value, node)
      this.size++
      return newNode
    }
    node.next = this.insertRecHelper(index - 1, value, node.next)
    return node
  }

  deleteDuplicates() {
    let tmpNode = this.head
    while (tmpNode && tmpNode.next) {
      if (tmpNode.next && tmpNode.value === tmpNode.next.value) {
        tmpNode.next = tmpNode.next.next
      } else {
        tmpNode = tmpNode.next
      }
    }
  }

}



// * calls

const list = new SinglyLinkedList()
list.insert(11, 4)
list.insertEnd(22)
list.insertStart(10)
list.insertStart(12)
list.insertStart(1)
list.insertEnd(100)
list.insertStart(6)
list.insert(201, 4)
list.insert(2, 0)
// list.insert(1101, 10)
list.display()
console.log('\nreverse order')
list.displayReverse()

// console.log('\ninert node before and after')
// list.insertBeforeAndAfter(1,1999,2000)
// list.insertBeforeAndAfter(2,1999,2000)
// list.insertBeforeAndAfter(100,1999,2000)
// list.display()

// console.log('\nafter delete value operation ')
// list.deleteValue(10)
// list.display()


// console.log('\nafter deleteFirst operation ')
// list.deleteFirst()
// list.deleteFirst()
// list.display()

// console.log('\nafter deleteLast operation ')
// list.deleteLast()
// list.deleteLast()
// list.display()

// console.log('\nafter delete operation ')
// list.delete(3)
// list.delete(7)
// list.delete(0)
// list.display()

// console.log('\ninsert using recursion ')
// list.insertRec(2000, 0)
// list.insertRec(3, 3)
// list.insertRec(4, 3)
// list.insertRec(5, 3)
// list.insertRec(4, 5)

// list.display()


// * remove duplicates
// console.log('\nremove duplicates problem')
// list.insertEnd(1)
// list.insertEnd(1)
// list.insertEnd(1)
// list.insertEnd(2)
// list.insertEnd(3)
// list.insertEnd(3)
// list.display()

// console.log('\nafter removing')
// list.deleteDuplicates()
// list.display()



// * merge linked lists
// let list1 = new SinglyLinkedList()
// let list2 = new SinglyLinkedList()

// console.log('\nlist 1 ')
// list1.insertEnd(1)
// list1.insertEnd(1)
// list1.insertEnd(20)
// list1.insertEnd(49)
// list1.display()

// console.log('\nlist 2 ')
// list2.insertEnd(3)
// list2.insertEnd(4)
// list2.insertEnd(10)
// list2.insertEnd(20)
// list2.insertEnd(22)
// list2.insertEnd(29)
// list2.insertEnd(444)
// list2.display()

// console.log('\nmerged list ')
// const result = merge(list1.head, list2.head)
// let tmp = result
// while (tmp) {
//   process.stdout.write(tmp.value + ', ')
//   tmp = tmp.next
// }


// function merge(list1, list2) {
//   let result = new SinglyLinkedList()
//   let tail = result
//   while (list1 && list2) {
//     // console.log(list1.value, list2.value)
//     if (list1.value <= list2.value) {
//       tail.next = list1
//       list1 = list1.next
//     } else {
//       tail.next = list2
//       list2 = list2.next
//     }
//     tail = tail.next
//   }

//   tail.next = list1 || list2
//   return result.next
// }



