const divisions = (n, divisor) => {
  console.log(n, divisor)
  let count=0
  while (n>divisor){
    n/=divisor
    count++
  }
  if (n===divisor){
    count++
    return count
  }
  return count
};


/*
P:number and divisor
R: number of times the number can bve divided by that divisor
E: 6 / 2 = 3 (times)
P: 
let count=0
while loop for n>divisor, count++
if n===divisor, count++ one last time
*/