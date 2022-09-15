function findArray(arr1, arr2){
  if (!arr1 || !arr2){return []}
  let arr = []
  for (let i=0; i<arr2.length; i++){
    let element = arr1[(arr2[i])]
    if (element || element === 0 ){
      arr.push(element)
    }
  }
  return arr
}


/*
two arrays. use second array as index picking of first array's slements
for loop using the second array, and if the index exists for the first element, push it to the new array
*/