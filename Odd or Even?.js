function oddOrEven(array) {
   if (!array){return 'even'}
  const sum=array.reduce((c,p)=>c+p, 0)
  console.log(sum)
  return sum%2===0?'even':'odd'
}

/*
P: array of nums
R: even or odd
E: [1023, 1, 2]), 'even'
P: reduce method
*/