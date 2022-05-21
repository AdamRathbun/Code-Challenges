function minimumSteps(numbers, value){
    numbers.sort((a,b)=>a-b)
    let sum=numbers[0]
    let count=0
    for (let i=1; i<numbers.length; i++){
      if (!(sum>=value)){
        sum+=numbers[i]
        count++
      }
    }
    return count
  }
  
  /*
  P: array of nums and 1 num
  R: num
  E: function([4,6,3], 7) returns 1 b.c 3+4>=7
  P:
  let sum and let count
  sort
  for loop
  conditional
  */
 