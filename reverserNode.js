// reverser Node

class Node{
    constructor(value, next){
        this.value=value
        this.next = next || null
    }
}

function reverserNode(head){
    let prev=null
    let current=head
    while (current){
        let next=current.next
        current.next=prev
        prev=current
        current=next
    }
    return prev
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

reverserNode(head)






class Node{
    constructor(value, next){
        this.value=value
        this.next=next || null
    }
}

function reverser(head){
    let current=head
    let prev=null
    while(current){
        let next=current.next
        current.next=prev
        prev=current
        current=next
    }
    return prev
}

let myNode=new Node(1)
myNode.next=new Node(2)
myNode.next.next=new Node(3)
myNode.next.next.next=new Node(4)
myNode.next.next.next.next=new Node(5)
reverser(myNode)