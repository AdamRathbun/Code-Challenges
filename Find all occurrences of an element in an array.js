const findAll = (array, n) => {
  let arr=[]
  for (let i=0; i<array.length; i++){
    if (array[i]===n){
      arr.push(i)
    }
  }
  return arr
}


/*
p: array, integer
r: all instances of the integer (at the index)
e: findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
p:
for loop, match it, add index to a new array
*/