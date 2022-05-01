/*
function mirrorImage(arr){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i].toString().split('').reverse().join('')===arr[i+1].toString()) {
      console.log(arr[i],arr[i+1])
      return [arr[i],arr[i+1]]
    }
  }
  return [-1,-1]
}
*/

function mirrorImage(arr){
    let A=0
    let B=0
    let tester=arr.some((v,i)=>{
      A=arr[i]
      B=arr[i+1]
      return String(A).split('').reverse().join('')===String(B)
    })
    return tester ? [A,B] : [-1,-1]
  }