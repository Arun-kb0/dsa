// * balanced binary search tree

class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
    this.height = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  validate(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true
    if (node.value <=min  || node.value>=max) return false
    return this.validate(node.left, min, node.value)
      && this.validate(node.right, node.value, max)
  }

  findNearest(value, node = this.root, closest = null) {
    if (!node) return closest
    if (closest === null
      || Math.abs(node.value - value) < Math.abs(closest - value)
    ) {
      closest = node.value
    }

    if (value < node.value) {
      return this.findNearest(value, node.left, closest)
    } else if (value > node.value) {
      return this.findNearest(value, node.right, closest)
    } else {
      return node.value
    }
  }

  delete(value, node = this.root,) {
    if (!node) return null

    node.left = this.delete(value, node.left)
    node.right = this.delete(value, node.right)

    if (node.value === value) {
      // * no children
      if (!node.left && !node.right) return node = null

      // * 1 child
      if (!node.left) return node.right
      if (!node.right) return node.left
      // * 2 children
      const minNode = this.getMin(node.right)
      node.value = minNode.value
      node.right = this.delete(minNode.value, node.right)
    }
    return node
  }

  getMin(node) {
    while (node.left) {
      node = node.left
    }
    return node
  }

  postOrder(node = this.root) {
    if (!node) return
    this.postOrder(node.left)
    this.postOrder(node.right)
    process.stdout.write(node.value + ', ')
  }

  inOrder(node = this.root) {
    if (!node) return
    this.inOrder(node.left)
    process.stdout.write(node.value + ', ')
    this.inOrder(node.right)
  }


  preOrder(node = this.root) {
    if (!node) return
    process.stdout.write(node.value + ', ')
    this.preOrder(node.left)
    this.preOrder(node.right)
  }

  populate(arr = []) {
    for (let val of arr) {
      this.insert(val)
    }
  }

  isBalanced() {
    return this.isBalancedHelper(this.root)
  }
  isBalancedHelper(node) {
    if (!node) return true
    const heightDiff = Math.abs(this.getHeight(node.left) - this.getHeight(node.right))
    if (heightDiff > 1) return false
    return this.isBalancedHelper(node.left) && this.isBalancedHelper(node.right)
  }

  insert(value) {
    this.root = this.insertHelper(value, this.root)
  }

  insertHelper(value, node) {
    if (!node) {
      return new Node(value)
    }
    if (value < node.value) {
      node.left = this.insertHelper(value, node.left)
    }
    if (value > node.value) {
      node.right = this.insertHelper(value, node.right)
    }
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
    return node
  }

  getHeight(node) {
    if (!node) return -1
    return node.height ? node.height : 0
  }

  isEmpty() {
    return this.root === null
  }

  display() {
    this.displayHelper(this.root, 'Root node : ')
  }

  displayHelper(node, details) {
    if (!node) return
    console.log(details, node.value)
    this.displayHelper(node.left, `left child of ${node.value} : `)
    this.displayHelper(node.right, `Right child of ${node.value} : `)
  }
}


const bst = new BST()
// bst.populate([5, 2, 7, 1, 4, 6, 9, 8, 3, 10])
// bst.populate([1,2,3,4,5,6])
bst.populate([10, 6, 9, 4, 15, 16, 11])


bst.display()
console.log(bst.isBalanced())
console.log('pre order')
bst.preOrder()
console.log('\nin order')
bst.inOrder()
console.log('\nin order')
bst.postOrder()

console.log('\nafter deletion')
bst.delete(6)
bst.postOrder()


console.log('\nclosest = ', bst.findNearest(6))
console.log('\nisBinary tree', bst.validate())