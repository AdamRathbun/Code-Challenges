// queue and stack practice

class Queue{
    constructor(){
        this.storage={}
        this.head=0
        this.tail=0
    }
    enqueue(element){
        this.tail++
        this.storage[this.tail]=element
    }
    dequeue(){
        const removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
    size(){
        return Object.keys(this.storage).length
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.size()

class Stack{
    constructor(){
        this.storage={}
        this.capacity=0
    }
    push(element){
        this.capacity++
        this.storage[this.capacity]=element
        // important to note for both stack especially, increment before adding the new element or it messes things up for pop
    }
    pop(){
        const removed = this.storage[this.capacity]
        delete this.storage[this.capacity]
        this.capacity--
        return removed
    }
    size(){
        return Object.keys(this.storage).length
    }
    peek(){
        return this.storage[this.capacity]
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.size()