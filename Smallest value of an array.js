function min(arr, toReturn) {
  if (toReturn==='value'){
    return Math.min(...arr)
  }else {
    return arr.indexOf(Math.min(...arr))
  }
}

/*
P: array then a string
R: if string is value, then return smallest value
if string is index, then return the index of the smallest value
E: 
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
P:
if statement
Math.min(...arr)
indexOf(Math.min(...arr))
*/