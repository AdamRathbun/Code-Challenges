// // reverser Node

// class Node{
//     constructor(value, next){
//         this.value=value
//         this.next = next || null
//     }
// }

// function reverserNode(head){
//     let prev=null
//     let current=head
//     while (current){
//         let next=current.next
//         current.next=prev
//         prev=current
//         current=next
//     }
//     return prev
// }

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// reverserNode(head)






// class Node{
//     constructor(value, next){
//         this.value=value
//         this.next=next || null
//     }
// }

// function reverser(head){
//     let current=head
//     let prev=null
//     while(current){
//         let next=current.next
//         current.next=prev
//         prev=current
//         current=next
//     }
//     return prev
// }

// let myNode=new Node(1)
// myNode.next=new Node(2)
// myNode.next.next=new Node(3)
// myNode.next.next.next=new Node(4)
// myNode.next.next.next.next=new Node(5)
// reverser(myNode)


class Node {
    constructor(value, next){
        this.value=value
        this.next=next || null
    }
}

function reverser(head){
    let curr=head
    let prev=null
    while (curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    return prev
}

let node1=new Node(1)
node1.next=new Node(2)
node1.next.next=new Node(3)
node1.next.next.next=new Node(4)
reverser(node1)


function anagramer(word){
    const reversed=word.split('').reverse().join('')
    if (word===reversed){
        return 'Yes, it is an anagram.'
    }else{
        return 'No, it is not an anagram'
    }
}

function anagrams(string1, string2){
    string1=string1.split('')
    string2=string2.split('')
    let str1={}
    let str2={}
    for (let i=0; i<string1.length; i++){
        str1[string1[i]]=str1[string1[i]]+1 || 1
    }
    for (let j=0; j<string2.length; j++){
        str2[string2[j]]=str2[string2[j]]+1 || 1
    }
    if (JSON.stringify(str1)===JSON.stringify(str2)){
        return true
    }else{
        return false
    }
}

function anagrams2(str1, str2){
    if (str1.length!==str2.length){
        return false
    }
    let sorted1=str1.split('').sort().join('')
    let sorted2=str2.split('').sort().join('')

    return sorted1===sorted2
}

