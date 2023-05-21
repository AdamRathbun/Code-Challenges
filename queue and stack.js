// queue and stack practice 1

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


// new prac
class Queue2{
    constructor(){
        this.head=0
        this.tail=0
        this.storage={}
    }
    enqueue(item){
        this.tail++
        this.storage[this.tail]=item
    }
    dequeue(){
        const item=this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return item
    }
    increment(amount, items){
        if (items> (this.tail-this.head)){
            return 'Not enough items in queue.'
        }
        for (let i=this.head; i<=(this.head+items); i++){
            this.storage[this.head]+=amount
        }
    }
}

class Stack2{
    constructor(){
        this.storage={}
        this.capacity=0
    }
    push(item){
        this.capacity++
        this.storage[this.capacity]=item
    }
    pop(){
        const item=this.storage[this.capacity]
        delete this.storage[this.capacity]
        this.capacity--
        return item
    }
}