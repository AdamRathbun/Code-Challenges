function minSum(arr) {
  arr.sort((a,b)=>a-b)
  let array=[]
  for (let i=0; i<=(arr.length/2)-1; i++){
    array.push(arr[i]*arr[(arr.length-1-i)])
  }
  return array.reduce((a,b)=>a+b)
}

/*
P array of nums
R smallest sum of products of 2 nums
E [5,4,2,3] returns 22 because 5*2 + 3*4
P
sort arr
make new array
for loop to half of length -1 
for every i, multiply by element at index at length-1-i
push to arr
reduce arr with ((a,b)a+b)
*/