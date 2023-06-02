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