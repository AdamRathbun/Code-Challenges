function reduce(head, f, init) {
  let arr=[]
  while (head){
    arr.push(head.data); 
    head=head.next
  }
  return arr.reduce(f,init)
}


/*
P: linked list in head, a reduce() with f, and an initial value with init
R: one num
E: 1 -> 2 -> 3 -> 4, the function (acc, curr) => acc * curr and an initial value of 1, reduce should return 24
P:
console log shows that head is an object with two properties: data and next,
data is the key for the value I want. next is the pointer to the next Node
store all the values of each new Node inside an array and run reduce on it
when a while loop runs to the end of the linked list, it will naturally return null and stop
*/