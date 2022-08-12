function consecutive(arr) {
  arr.sort((a,b)=>a-b)
  let array=[]
  for (let i=arr[0]; i<=arr[arr.length-1]; i++){
    array.push(arr[i])
  }
  return array.length-arr.length
}

/*
P: array of numbers 
R: min number of numbers it takes to make the array consecutive
E: consecutive([4,8,6]),2
P:
sort lowest to highest
for loop from first element to last, pushing it to a new arr
compare new arr length to original array length
*/
