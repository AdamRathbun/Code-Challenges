// JS prac 2

function houseNumbersSum(inputArray) {
    if (inputArray[0]===0){
      return 0
    }
    
    let sum=0
    
    for (let i=0; i<inputArray.length; i++){
      if (inputArray[i]!==0){
        sum+=inputArray[i]
      }else{
        return sum
      }
    }
    
    return sum
    
  }
  
  // given a number array, return sum before first 0

  function avg(a){
    return (a.reduce((a,c)=>a+c))/a.length
  }

//   return average succinctly

Array.prototype.remove = function(index) {
    if (typeof index==='number' && index>=0){
      this.splice(index,1)
    }
    
    return this
  };

// add remove method to Array object so all arrays can remove an element. ex. let arr1=[0,3,4] arr1.remove(1) arr1 becomes [0,4]

function arrayChange(arr) {
    //coding and coding..
    if (arr.length===0){
      return 0
    }
    
    let moves = 0
    
    for (let i=0; i<arr.length; i++){
      if (arr[i]<=arr[i-1]){
        let diff = arr[i-1] - arr[i] + 1
        arr[i]+=diff
        moves+=diff
      }
    }
    
    return moves
    
  }
  
  // return min number of moves to make arr elements increasing

  function keysAndValues(data){
    console.log(data)

    let keys=[]
    let values=[]
    
    for (let key in data){
      if (data.hasOwnProperty(key)){
        // note can do this to exclude keys and values from the prototype chain that are not in this direct object:    
        // if (Object.prototype.hasOwnProperty.call(data, key)) {
      keys.push(key)
      values.push(data[key])
      }

    }
  
    return [keys, values]
  
  }

//   return the keys in an array and the values in another array from an object. note hasOwnProperty() checks if that object has it or if it's from the prototypal chain, in which case it wouldn't do anything. also note to use let for the for loop so it's block scoped for best practice.

function sumArr(a,b) {
  let arr=[]
  let greater = Math.max(a.length, b.length)
  for (let i=0; i<greater; i++){
    if (a[i] && b[i]){
      arr.push(String(Number(a[i])+Number(b[i])))
    }else if (!a[i] && b[i]){
      arr.push(b[i])
    }else if (a[i] && !b[i]){
      arr.push(a[i])
    }else{
      arr.push('0')
    }
  }
  console.log(arr)
  return arr
}

// Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well. If any input is an empty string, it should return the number that isn't just an empty string. If both corresponding elements are empty, output "0".

function listToArray(list) {
  console.log(list)
  let arr=[]
  while(list){
    arr.push(list.value)
    list=list.next
  }
  return arr
}

// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

function twins(arr){
  console.log(arr)
  return arr.every(x=>arr.filter(v=>v===x).length===2)
}

// You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
// solution: check every value such that if you do a filter of the array for values equal to that value, the length of the filter is 2

Array.prototype.sum=function(){
  if (this.length===0){
    return 0
  }else{
    return this.reduce((a,b)=>a+b)
  }
}

// Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

function avg(a){
  return a.reduce((a,c)=>a+c)/a.length
}

// average of array


// *** Pair Programming - Jonathan Dayton
// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

// the desired output is

// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

// Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

// Note: Return a new array, rather than modifying the passed array.


// return a new array based on an array that changes every element with the least greater to its right. If no least greater, then -1
function arrayManip(array){
  console.log(array)

  let final = []
  let temp = []

// nested for loop
  for (let i=0; i<array.length; i++){
    for (let j=i+1; j<array.length; j++){
      if (array[j]>array[i]){
        temp.push(array[j])
      }
    }

    // find the smallest among temp array. spread the temp array and use Math.min.
    let min = temp.length>0 ? Math.min(...temp) : -1
    // pushing the lowest value element or -1 to final array
    final.push(min)
    // clearing temp array
    temp=[]

  }

  console.log(final)
  return final
}

// ME: if I were to do this by hand, I would do the first element 8, I would look at every element greater than 8, then find the least greater in my new output (element 0 would be 18). The next is 58, which becomes 63. For each element, I'm going to another element, so that sounds like a nested for loop.
// ME: remember to ask what kinds of inputs I will get. 
// THEY: might throw in a twist after I solve it, like what if the problem because a matrix (array of arrays)

// time complexity O(n^2), where n is the length of the array

// Twist: if we want to get rid of the Math.min, is there a way to do the min within the inner loop

function arrayManip(array){
  console.log(array)

  let final = []
  let temp = []

// nested for loop
  for (let i=0; i<array.length; i++){
    for (let j=i+1; j<array.length; j++){
      // try to calculate the minimum of the elements at this conditional to reduce operations
      if (array[j]>array[i]  ){
        temp.push(array[j])
      }
    }

    // find the smallest among temp array. spread the temp array and use Math.min.
    let min = temp.length>0 ? Math.min(...temp) : -1
    // pushing the lowest value element or -1 to final array
    final.push(min)
    // clearing temp array
    temp=[]

  }

  console.log(final)
  return final
}

// sort best speed is n*log(n)

// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]
function min(array){

  if (array.length===0){
    return false
  }

  let smallest = 0
  for (let i =0; i<array.length; i++){
    if (i===0){
      smallest=array[i]
    }else if (array[i]<smallest){
      smallest=array[i]
    }
  }

  return smallest
}

// I SS'd Jonathan's thinking approach. 
// might also be a n*log(n) solution with sort and mapping the sorted to original index
// ANYWAYS look up time complexity
// also for pseudo coding, try to keep it short, like 3 words

// KNOW: map, filter, and reduce. TRY to use these. 
// map: list[n: A] -> list[n: B]
  // small note map is time complexity wise same as for loop but implementation wise different. Google prefers map
// filter: list[n: A] -> list[m(<=n): A]
// reduce: list[n: A] -> element: B


// Write
// Array.prototype.remove = function(pred) {}
// that given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed.
// For example:

// var array = [1,2,3,4,5];
// // We wish to remove all the even elements from array and then return those removed elements
// var removed = array.remove(function(a) { return a%2===0;});
// // array === [1,3,5]  removed === [2,4]
Array.prototype.remove = function (pred) {
  let removed = this.filter(x=>pred(x))
  this.splice(0, this.length, ...this.filter(x=>!pred(x)))
  return removed
};

// Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

// Ex: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null.

function filter(head, p) {
  
  if (!head){
    return null
  }
  
  let newHead=null
  let tail=null
  
  while (head){
    if (p(head.data)){
      const newNode = new Node(head.data)
      if (!newHead){
        newHead=newNode
        tail=newNode
      }else{
        tail.next=newNode
        tail=tail.next
      }
    }
    head=head.next
  }
  
  return newHead
}

// array sum reduce simple.
function reducer(array){
  return array.reduce((a,c)=>a+c,0)
}

// array of objects reduce, find sum of costs
let arrayMaterials=[{name:'brick', cost:30000}, {name:'plaster', cost: 24000}, {name:'wood', cost: 50000}]

function reducer2(array){
  return array.reduce((a,c)=>a+c.cost, 0)
}

// convert 2-D array into an object with reduce
let keyValuePairs = [['username', 'dcode'], ['member since', '2020-04-06'], ['age', 35]]

function reducer3(array){

  return array.reduce((a,c)=>{
    let key = c[0]
    let value = c[1]

    a[key]=value
    return a
  })
}

// find the max or min salary of an array of people objects with reduce

const people = [{name: 'Dom', occupation: 'SE', salary: 90000}, {name: 'Max', occupation: 'Mechanic', salary: 150000}, {name: 'DBeth', occupation: 'Teacher', salary: 75000}]

// function reducer4(array){
//   let arr1= []

//   for (let i=0; i<array.length; i++){
//     arr1.push(array[i].salary)
//   }

//   return Math.min(...arr1)
// }

function reducer4(array){
// for highest salary
  return array.reduce((a,c)=>{
    if (c.salary>a){
      return c.salary
    }else {
      return a
    }
  },0)
}

// function reducer4(array){
//   // for highest salary
//   return array.reduce((a,c)=>{
//     return c.salary>a?c.salary:a
//   },0)
// }

// version that returns the person object
function reducer4(array){
  // for highest salary
    return array.reduce((a,c)=>{
      if (c.salary>a.salary){
        // return {name:c.name, occupation:c.occupation, salary:c.salary}
        return c
      }else {
        return a
      }
    },{name:null, occupation:null, salary:0})
  }

// version that counts occurences of strings in array
const colorSet=['green', 'red', 'blue', 'red', 'red', 'green']
function reducer5(array){
  console.log(array)

  return array.reduce((a,c)=>{
    a[c]=a[c]+1 || 1
    return a
  },{})

}

// concatenating uneven arrays of strings
let unevenStuff = [['which', 'which', 'which', 'which'], ['sun', 'moon'], ['stream', 'food', 'ass']]
function unevenArray(array){
  return array.reduce((a,c)=>`${a},${c}`, '')
}
// and now find the unique elements in each subarray
function noDupes(array){
  console.log(array)

  let uniques=array.map(subarray=>[...new Set(subarray)])
  console.log(uniques)
}

// given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed.
Array.prototype.remove = function (pred) {
  let removed = this.filter(x=>pred(x))
  this.splice(0, this.length, ...this.filter(x=>!pred(x)))
  return removed
};

// The Array's reverse() method has gone missing! Re-write it, quick-sharp! When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Array.prototype.reverse = function() {
  let left = 0
  let right = this.length-1
  while (left<right){
    let temp = this[left]
    this[left]=this[right]
    this[right]=temp
    left++
    right--
  }
  return this
};

// Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well. If any input is an empty string, it should return the number that isn't just an empty string. If both corresponding elements are empty, output "0".

function sumArr(a,b) {
  console.log(a,b)
  let final=[]
  let higherLength=Math.max(a.length, b.length)
  for (let i=0; i<higherLength; i++){
    let aNum=Number(a[i]) || 0
    let bNum=Number(b[i]) || 0
    let sum = aNum+bNum
    final.push(String(sum))
  }
  return final
}

// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// For this kata assume that all characters are lowercase.

function permuteAPalindrome (input) { 
  console.log(input)
  
//   could store in an object
  
  let storage = {}
  let checker = 0
  
  for (let i=0; i<input.length; i++){
    storage[input[i]] = storage[input[i]] + 1 || 1
  }
  
  console.log(storage)
  
//   check to see if there's only 1 or less keys that has an odd number of value
  for (let key in storage){
//     checking odd
    if (storage[key]%2!==0){
      checker++
    }
  }
//   if there's only 1 or less odd appearance values for a character, return true for palindrome
//   if (checker===1 || checker===0){
//     return true
//   }else{
//     return false
//   }
  
  return checker===1 || checker===0 
}

