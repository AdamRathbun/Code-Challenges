//   Queue, the good version

class Queue{
    constructor(){
      this.storage={}
      this.head=0
      this.tail=0
    }
    enqueue(item){
      this.storage[this.tail]=item
      this.tail++
    }
    dequeue(){
      const removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }

  }

  const queue = new Queue()
  queue.enqueue('seahorse')
  queue.enqueue('shark')
  queue.enqueue('turtle')
  queue.dequeue()

//   Object.keys(queue.storage) returns ['1', '2']
//   queue.storage['1'] returns 'shark'

// Queue - bad version
class Queue{
    constructor(){
      this.array=[]
    }
    enqueue(item){
      this.array.push(item)
    }
    dequeue(){
      return this.array.shift()
    //   bad because shift() is O(n) since you're shifting the entire array
    }
    size(){
      return this.array.length
    }
    peek(){
      return this.array[0];
    }
  }

//   Stack
  class Stack{
    constructor(){
        this.storage={}
        this.size=0
    }
    push(item){
        this.size++
        this.storage[this.size]=item
    }
    pop(){
        const removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    peek(){
        return this.storage[this.size]
    }
  }

  const stack = new Stack()
  stack.push('dog')
  stack.push('cat')
  stack.push('bear')
  stack.pop()
  stack.peek()