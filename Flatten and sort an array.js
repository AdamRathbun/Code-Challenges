function flattenAndSort(array) {
  let arr=[].concat(...array).sort((a,b)=>a-b)
  return arr;
}

/*
P:array of arrays
R: flattened array
E: Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
P:
spread operator and sort
*/