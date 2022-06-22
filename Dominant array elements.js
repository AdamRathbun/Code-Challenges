function solve(arr){
  let a=[]
  for (let i=0; i<arr.length-1; i++){
    let b=arr.slice(i+1)
    let c=b.map(x=>arr[i]>x)
    if (c.every(v=>v===true)){
      a.push(arr[i])
    }
  }
  a.push(arr[arr.length-1])
  return a
};


// P: array
// R: array of dominant elements, as in bigger than element to its right
// E: solve([1,21,4,7,5]) = [21,7,5]
// P:
// a=empty array
// b=inside of for loop, let b=arr.slice(i+1)
// c=inside of for loop, let c=b.map(x=>arr[i]>x)
// if c.every(v=>v===true), push arr[i]
// note that map() transforms as it creates new array, so each one will be boolean
// add the last element