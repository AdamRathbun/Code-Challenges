// You are given an empty stack. Your task is to perform following three operations:
// push a: Push an integer a, to the top of the stack
// pop: Pop the top element from the stack. It is guaranteed that stack is not empty, when performing the pop operation.
// inc x d: Add d to bottom x elements of the stack.
// After each operation, print the top element of the stack, if after an operation, the stack becomes empty, then print EMPTY.

// create a stack. It needs 3 methods, push an integer to the top of the stack, pop the top element from the stack, and inc x d (increment the bottom x number of elements by d). In addition, after each operation, print the top element of the stack. If stack is empty, print empty. Even though pop will not be performed on an empty stack, I'm going to build a failsafe anyways.

class Stack{
    constructor(){
        this.capacity=0
        this.storage={}
    }

    push(element){
        this.capacity++
        this.storage[this.capacity]=element
        console.log(this.storage[this.capacity])
    }

    pop(){
        if(this.capacity===0) console.log('EMPTY')
        delete this.storage[this.capacity]
        this.capacity--
        this.capacity > 0 ? console.log(this.storage[this.capacity]) : console.log('EMPTY')
    }

    inc(x,d){
        for (let i=1; i<=x; i++){
            this.storage[i] += d
        }
        console.log(this.storage[this.capacity])
    }
}

const stackeroo = new Stack()
stackeroo.push(14)
stackeroo.push(4)
stackeroo.push(44)
stackeroo.push(24)
stackeroo.pop()
stackeroo.inc(2,3)


// AI Answer:

class Stack {
    constructor() {
      this.capacity = 0;
      this.storage = {};
    }
  
    push(element) {
      this.capacity++;
      this.storage[this.capacity] = element;
      console.log(this.storage[this.capacity]);
    }
  
    pop() {
      if (this.capacity === 0) {
        console.log("EMPTY");
      } else {
        delete this.storage[this.capacity];
        this.capacity--;
        console.log(this.capacity > 0 ? this.storage[this.capacity] : "EMPTY");
      }
    }
  
    inc(x, d) {
    //checks to make sure that x does not exceed this.capacity
      let len = Math.min(x, this.capacity);
      for (let i = 1; i <= len; i++) {
        this.storage[i] += d;
      }
      console.log(this.capacity > 0 ? this.storage[this.capacity] : "EMPTY");
    }
  }
  