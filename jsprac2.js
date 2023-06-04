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

