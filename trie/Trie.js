class Node {
  constructor() {
    this.children = new Map()
    this.isWordEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(str) {
    let node = this.root
    for (let letter of str) {
      if (!node.children.has(letter)) {
        const newNode = new Node()
        node.children.set(letter, newNode)
      }
      node = node.children.get(letter)
    }
    node.isWordEnd = true
  }

  contains(str) {
    let node = this.root
    for (let letter of str) {
      if (!node.children.has(letter)) {
        return false
      }
      node = node.children.get(letter)
    }
    return node.isWordEnd
  }

  remove(str) {
    if (!this.contains(str)) {
      return console.log('string not found')
    }
    this.removeHelper(this.root, str, 0)
  }

  removeHelper(node, str, index) {
    if (index === str.length) {
      if (node.isWordEnd) {
        node.isWordEnd = false
      }
      return node.children.size === 0
    }

    const letter = str[index]
    const childNode = node.children.get(letter)

    if (this.removeHelper(childNode, str, index + 1)) {
      node.children.delete(letter)
      return  node.children.size ===0 && !node.isWordEnd
    }
    return false
  }


  findSimilar(prefix) {
    let node = this.root
    const result = []
    for (let letter of prefix) {
      if (!node.children.has(letter)) {
        return []
      }
      node = node.children.get(letter)
    }
    this.collectWords(node, prefix, result)
    return result
  }

  collectWords(node, prefix, result) {
    if (node.isWordEnd) {
      result.push(prefix)
    }
    for (let [letter, childNode] of node.children) {
      this.collectWords(childNode, prefix + letter, result)
    }
  }

}



// * function call
const trie = new Trie()
trie.insert('amal')
trie.insert('ammu')
trie.insert('man')
trie.insert('arun')
trie.insert('arunima')

console.log(trie.contains('arun'))
console.log(trie.contains('man'))
console.log(trie.contains('ad'))

// console.log(trie.findSimilar('a'))

// console.log('remove value')
// trie.remove('arun')
// console.log(trie.findSimilar('a'))

