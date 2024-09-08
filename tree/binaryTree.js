const { copyFileSync } = require('fs');
const readline = require('readline')

function askQuestion(query) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (answer) => {
      rl.close(); // Make sure the readline interface is closed
      resolve(answer);
    });
  });
}


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  async populate() {
    const value = await askQuestion('enter root node = ')
    this.root = new Node(value)
    await this.populateDecedents(this.root)
  }

  async populateDecedents(node) {
    const left = await askQuestion(`press y to add to left ${node.value} = `)
    if (left.toLowerCase() === 'y') {
      const value = await askQuestion(`enter value to add to left ${node.value} = `)
      const leftNode = new Node(value)
      node.left = leftNode
      await this.populateDecedents(leftNode)
    }

    const right = await askQuestion(`press y to add to right ${node.value} = `)
    if (right.toLowerCase() === 'y') {
      const value = await askQuestion(`enter value to add to right ${node.value} = `)
      const rightNode = new Node(value)
      node.right = rightNode
      await this.populateDecedents(rightNode)
    }
  }

  display() {
    this.displayHelper(this.root, '')
  }
  displayHelper(node, indent) {
    if (!node) return
    console.log(indent + node.value)
    this.displayHelper(node.left, indent + '\t')
    this.displayHelper(node.right, indent + '\t')
  }


  prettyDisplay() {
    this.prettyDisplayHelper(this.root, 0)
  }

  prettyDisplayHelper(node, level) {
    if (!node) return
    this.prettyDisplayHelper(node.right, level + 1)
    if (level !== 0) {
      for (let i = 0; i < level; i++) {
        process.stdout.write('|\t')
      }
      console.log('|---->' + node.value)
    } else {
      console.log(node.value)
    }

    this.prettyDisplayHelper(node.left, level + 1)
  }


}


const binTree = new BinaryTree()
binTree.populate()
  .then(() => binTree.prettyDisplay())