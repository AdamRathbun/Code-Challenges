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

