function sumCubes(n){
    let sum=0
    for (let i=1; i<=n; i++){
      const num = Math.pow(i, 3)
      sum+=num
    }
    return sum
  }
  
  // parameter is a number that's a positive integer. Want to return a number that's the sum of cubes
  // of every number from 1 to that number
  // example: sumCubes(2) returns 9 because that's 1*1*1+2*2*2