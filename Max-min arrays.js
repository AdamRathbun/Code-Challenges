function solve(arr){
  arr=arr.sort((a,b)=>a-b)
  let array=[]
  const len=arr.slice().length
  for (let i=0; i<len; i++){
     array.push(arr.pop())
     array.push(arr.shift())
  }
  console.log(array)
  return array.filter(x=>x!=undefined)
};

/*
P: array
R: re-arranged array with highest then lowest then repeat
E: solve([15,11,10,7,12]) = [15,7,12,10,11]
P:
sort
establish a const arr.slice().length for the original array length b.c I will be taking elements out
for loop
push(pop)
push(shift)
return filtered array where only elements that are not undefined show up --> 
note that undefined elements show up b.c I'm taking two elements at a time
*/