class HashTable {

  constructor(size = 10) {
    this.table = new Array(size)
    this.size = size
  }

  remove(key) {
    const index = this.hash(key)
    // this.table[index] = null
    const bucket = this.table[index]
    if (!bucket) return console.log('no value found')
    const sameKeyItem = bucket.find(item => item[0] === key)
    if (!sameKeyItem) return console.log('no value found')
    bucket.splice(bucket.indexOf(sameKeyItem), 1)
  }

  get(key) {
    const index = this.hash(key)
    // return this.table[index]
    const bucket = this.table[index]
    if (!bucket) return undefined

    const sameKeyItem = bucket.find(item => item[0] === key)
    if (!sameKeyItem) return undefined
    return sameKeyItem[1]
  }

  set(key, value) {
    const index = this.hash(key)
    // this.table[index] = value
    const bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
      return
    }
    const sameKeyItem = bucket.find(item => item[0] === key)
    if (sameKeyItem) {
      sameKeyItem[1] = value
    } else {
      bucket.push([key, value])
    }
  }

  display() { 
    let result = ''
    for (let val of this.table) {
      if (!val) continue
      result += val + ', '
    }
    console.log(result)
  }

  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

}


const table = new HashTable()
table.set('name', 'arun')
table.set('naem', 'jas')
table.set('age', 26)
table.set('grade', 'B')

console.log(table.get('name'))
table.remove('age')
table.remove('naem')
console.log(table.get('naem'))

console.log('override name ')
table.set('name', 'Diana')
console.log(table.get('name'))

console.log('print hash table ')
table.display()