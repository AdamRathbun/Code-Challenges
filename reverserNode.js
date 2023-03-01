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