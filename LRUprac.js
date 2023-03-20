// LRU prac

// version 1
class LRU{
    constructor(capacity){
        this.capacity=capacity
        this.cache=new Map()
    }

    get(key){
        if (!this.cache.has(key)) return -1
        const value = this.cache[key]
        // for objects of Map class, must use object.delete(key) instead of delete object[key]
        this.cache.delete(key)
        this.cache.set(key, value)
    }

    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
            this.cache.set(key, value)
        }else if(this.cache.size>this.capacity){
            this.cache.delete(this.cache.keys().next().value)
        }
    }
}

// reverse a linked list
class Node {
    constructor(value, next){
        this.value=value
        this.next=next || null
    }
}

function reverseNodes(head){
    let curr=head
    let prev=null
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    return prev
}

let head1=new Node(1)
head1.next=new Node(2)
head1.next.next=new Node(3)
head1.next.next.next=new Node(4)
head1.next.next.next.next=new Node(5)
reverseNodes(head1)
