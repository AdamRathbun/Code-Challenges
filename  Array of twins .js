function twins(myArray){
  return myArray.every(
    x=>myArray.filter(v=>v===x).length===2
  )
}

/*
you get an array of nums, have to check if each number only occurs twice.
return true or false
use every method and check against a filter where each value has to equal
the every value and the total length is only 2
*/