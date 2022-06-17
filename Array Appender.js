function appendArrays (arr1, arr2) {
  let arr=[].concat(arr1).concat(arr2)
  return arr
}

/*
P: two arrays which many contain nested arrays
R: a single unested arrays
E: ['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
P:
concat and spread operator
*/