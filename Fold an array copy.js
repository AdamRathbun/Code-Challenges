function foldArray(array, runs){
  let arr=[];
  let sliced=array.slice();
  while (sliced.length){
    arr.push(sliced.pop()+(sliced.shift() || 0))   //need || 0 for when it runs out of pairs to pop/shift
  };
  return (runs - 1)> 0 ? foldArray(arr, runs-1) : arr;
}

/*
P: array, number of folds
R: folded array according to number of folds (folding means adding paired nums on two sides of middle index)
E: [1,2,3,4,5] -> [6,6,3]
P:
make empty array arr and slice a new array out of original array
while loop to arr.push(pop + shift)
subtract 1 from runs count and call on function again if needed, else return arr
*/