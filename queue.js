class Queue{
    constructor(){
      this.array=[]
    }
    enqueue(item){
      this.array.push(item)
    }
    dequeue(){
      return this.array.shift()
    }
    size(){
      return this.array.length
    }
  }