// * number of recent calls
// * leetcode 933


class RecentCounter {

  constructor() {
    this.queue = []
  }

  ping(t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }
    return this.queue.length
  }

}


const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1))
console.log(recentCounter.ping(100))
console.log(recentCounter.ping(3001))
console.log(recentCounter.ping(3002))  
