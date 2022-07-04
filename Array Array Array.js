function explode(x){
  let a=x[0]
  let b=x[1]
  if (typeof a !== 'number' && typeof b !== 'number'){
    return 'Void!'
  }else if (typeof a === 'number' && typeof b === 'number'){
    return Array.from({length:(a+b)}).fill(x)
  }else if (typeof a === 'number' && typeof b !== 'number'){
    return Array.from({length:(a)}).fill(x)
  }else if (typeof b === 'number' && typeof a !== 'number'){
    return Array.from({length:(b)}).fill(x)
  }
}

/*
P: array of two nums
R: array made of a number of the original arrays (number based on the numbers inside the original array)
if both of original array are nums, add them for the number of arrays
E: 
(x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
P:
typeof to determine course of action
since it wants an array of arrays, could do Array.from({length:x[0]+x[1]}) to make an array with those elements
then do fill(x) to fill each element with the original array
*/