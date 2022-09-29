function houseNumbersSum(inputArray) {
  let arr=[]
  for (let i=0; i<inputArray.length; i++){
    if (inputArray[i]===0) break;
    else arr.push(inputArray[i])
  }
  return arr.reduce((a,b)=>a+b, 0)
}

/*
given an array, add sum of elements until you reach a 0
*/