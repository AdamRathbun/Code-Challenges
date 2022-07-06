function findMissing(arr1, arr2) {
  arr1.sort((a,b)=>a-b)
  arr2.sort((a,b)=>a-b)
  let len=Math.max(arr1.length, arr2.length)
  for (let i=0; i<len; i++){
    if (arr1[i]!==arr2[i] && arr1.length>arr2.length){
      return arr1[i]
    }else if (arr1[i]!==arr2[i] && arr1.length<arr2.length){
      return arr2[i]
    }
  }
}

/*
P: two arrays, but one is missing an element from the other
R: find the missing element (note could be dupe elements)
E: find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
P:
could sort both, then for loop, log the missing element
*/