function pipeFix(numbers){
  let arr=[]
  numbers.sort((a,b)=>a-b)
  let x=numbers[0]
  let y=numbers[numbers.length-1]
  for (let i=x; i<=y; i++){
    arr.push(i)
  }
  console.log(arr)
  return arr
}


/*
P: array of nums
R: array with every integer from the lowest to the highest integer of the original array
E: function([1,5,3]) returns [1,2,3,4,5]
P: 
sort 
assign lowest and highest
for loop lowest to highest push to empty array

*/