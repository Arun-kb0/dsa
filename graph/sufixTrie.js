class TrieNode {
  children = new Map()
}

class SuffixTrie {
  constructor(str) {
    this.root = new TrieNode()
    this.endSymbol = '*'
    if (str) {
      this.populateSuffixTrie(str)
    }
  }

  populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insertSubstringStartingAt(i, str)
    }
  }

  insertSubstringStartingAt(index, str) {
    let node = this.root
    for (let i = index; i < str.length; i++) {
      if (!node.children.has(str[i])) {
        const newNode = new TrieNode()
        node.children.set(str[i], newNode)
      }
      node = node.children.get(str[i])
    }
    node.children.set(this.endSymbol, null)
  }

  contains(str) {
    let node = this.root
    for (let letter of str) {
      if (!node.children.has(letter)) {
        return false
      }
      node = node.children.get(letter)
    }
    return node.children.has(this.endSymbol)
  }

}

const trie = new SuffixTrie()
trie.populateSuffixTrie('mannan')

console.log(trie.contains('an'))