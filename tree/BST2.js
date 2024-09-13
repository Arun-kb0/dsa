class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
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


  remove(value, node = this.root, parent = null) {
    while (node) {
      if (value < node.value) {
        parent = node
        node = node.left
      } else if (value > node.value) {
        parent = node
        node = node.right
      } else {
        break
      }
    }
    if (node?.value !== value) return console.log('not found')

    // * 1) has two children
    if (node.right && node.left) {
      const minNode = this.getMin(node.right)
      node.value = minNode.value
      this.remove(minNode.value, node.right, node)

      // * 2) no only one or no child
    } else {
      const child = node.left ? node.left : node.right
      if (!parent) {
        this.root = child
        return
      }

      if (parent.left === node) {
        parent.left = child
      } else if (parent.right === node) {
        parent.right = child
      }
    }

  }

  getMin(node) {
    while (node.left) {
      node = node.left
    }
    return node
  }

  contains(value) {
    let node = this.root
    while (node) {
      if (value < node.value) {
        node = node.left
      } else if (value > node.value) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  insert(value) {
    let node = this.root
    if (!node) {
      this.root = new Node(value)
      return
    }
    while (true) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value)
          break
        }
        node = node.left
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value)
          break;
        }
        node = node.right
      }
    }
  }

}




const bst = new BST()
bst.populate([10, 6, 4, 9, 15, 11, 16])

console.log(bst.contains(10))
console.log(bst.contains(9))

// console.log('\npre order ')
// bst.preOrder()
// console.log('\nin order ')
console.log('\nsort array order ')
bst.inOrder()
// console.log('\npost order ')
// bst.postOrder()

console.log('\nafter remove')
bst.remove(10)
// bst.remove(16)
// bst.remove(6)
bst.inOrder()


// * problems

// * validate bst
console.log('\nis binary search tree = ', validateBst(bst.root))
const target = 3
console.log(`\nvalue closest to ${target} = `, findClosest(target, bst.root))

function findClosest(target, node) {
  let closest = -Infinity
  while (node) {
    if (Math.abs(node.value - target) < Math.abs(closest - target)) {
      closest = node.value
    }
    if (target < node.value) {
      node = node.left
    } else if (target > node.value) {
      node = node.right
    } else {
      return node.value
    }
  }
  return closest
}

function validateBst(node, min = -Infinity, max = Infinity) {
  if (!node) return true
  if (node.value <= min || node.value >= max) return false
  return validateBst(node.left, min, node.value)
    && validateBst(node.right, node.value, max)
}


