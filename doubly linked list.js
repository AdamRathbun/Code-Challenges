// doubly linked list

class Node{
    constructor(value, prev, next){
        this.value=value
        this.prev= prev || null
        this.next = next || null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=this.tail=null
    }

    // add to end of list
    append(value){
        // if list is empty
        if(!this.tail){
            this.head=this.tail=new Node(value)
        }else{
            let oldTail=this.tail
            this.tail=new Node(value)
            oldTail.next=this.tail
            this.tail.prev=oldTail
        }
    }

    // add to beginning of list
    prepend(value){
        if (!this.head){
            this.head=this.tail=new Node(value)
        }else{
            let oldHead=this.head
            this.head=new Node(value)
            oldHead.prev=this.head
            this.head.next=oldHead
        }
    }

    deleteHead(){
        if (!this.head){
            return null
        }else{
            let removedHead=this.head
            // if 1 node left
            if (this.head===this.tail){
                this.head=this.tail=null
            }else{
                this.head=this.head.next
                this.head.prev=null
            }
            return removedHead.value
        }
    }

    deleteTail(){
        if (!this.tail){
            return null
        }else{
            let removedTail = this.tail
            if(this.tail===this.head){
                this.tail=this.head=null
            }else{
                this.tail=this.tail.prev
                this.tail.next=null
            }
            return removedTail.value
        }
    }

    search(value){
        // want to keep track of which node we are on currently
        let currentNode=this.head

        while(currentNode){
            if (currentNode.value===value){
                return currentNode
            }else{
                currentNode=currentNode.next
            }
        }
        // if no match
        return null
    }
}


let list = new DoublyLinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)

list.search(1)
list.search(999)

list.deleteHead()

list.deleteTail()