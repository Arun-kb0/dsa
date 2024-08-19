const { LinkedList } = require('datastructures-js')

const list1 = new LinkedList([1,1,2,3,21])
const list2 = new LinkedList([2,6,7,9])
mergeLinkedLists(list1,list2)


function mergeLinkedLists(list1, list2) {
  let f = list1.head
  let s = list2.head
  let result = new LinkedList()

  for (let i = 0; i < list1.size ; i++){
    console.log(list1[i])
  }
}