function equalize(array){
  let x=array[0]
  for (let i=0; i<array.length; i++){
    let a=array[i]-x
    if (a>=0){
      array[i]=`+${a}`
    }
    if (a<0){
      array[i]=`${a}`
    }
  }
  return array
}

/*
P: array
R: array of strings based on how far each element is from first element
E: 
Input :: [10,20,25,0]
Output :: ["+0", "+10", "+15", "-10"]
P:
if statement with 10
*/