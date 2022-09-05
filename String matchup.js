function solve(a,b){
  let arr=b.map(v=> v=0)
  for (let i =0; i<b.length; i++){
    for (let j=0; j<a.length; j++){
      if (b[i] === a[j]){
        arr[i]+=1
      }
    }
  }
  console.log(arr)
  return arr
}

/*
create a new array out of b
double for loop
if the strings equal, array value at index plus 1
*/