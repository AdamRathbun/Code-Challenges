function largestPairSum (numbers) {
  let sum=0
  numbers.sort((a,b)=>a-b)
  for (let i=numbers.length-2; i<numbers.length; i++){
    sum+=numbers[i]
  }
  return sum
}

/*
P array of nums
R sum of largest two numbers in array
E function([5,1,5,2]) returns 10
P
sort
for loop of just last two elements
add them
*/