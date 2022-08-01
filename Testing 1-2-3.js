var number=function(array){
  const arr=[...array]
  for (let i=0; i<arr.length; i++){
    arr[i]=`${i+1}: ${arr[i]}`
  }
  return arr
}