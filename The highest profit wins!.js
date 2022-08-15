function minMax(arr){
  const array=arr.sort((a,b)=>a-b)
  return [array[0], array[array.length-1]]
}