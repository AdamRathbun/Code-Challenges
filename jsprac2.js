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
      keys.push(key)
      values.push(data[key])
    }
  
    return [keys, values]
  }

//   return the keys in an array and the values in another array from an object

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

