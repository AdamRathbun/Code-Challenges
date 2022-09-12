function filterHomogenous(arrays) {
  const arr = arrays.filter(x=>x.every((x,i,arr)=>typeof x === typeof arr[0]))
  return arr.filter(x=>x.length !==0)
}

/*
given an array of arrays, return only arrays that have the same data type

filter the original array such that every element of each sub array has the same type
typeof x === typeof arr[0]
return that array filtered such that it doesn't include empty sub arrays
*/