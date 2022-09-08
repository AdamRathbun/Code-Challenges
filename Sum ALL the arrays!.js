function arraySum(arr) {
  return JSON.stringify(arr).match(/[0-9\.]+/g).reduce((a,b)=>Number(a)+Number(b))
}

/*
  regex: JSON.stringify().match(/[0-9\.]+/g
  match any number, escaping any characters, can be one or more digits, global
  then reduce (remember to turn into numbers)
  
but initially:
  let sum=0
  for (let i=0; i<arr.length; i++){
    if (typeof arr[i] == 'number'){
      sum=sum+arr[i]
    }else {
        console.log(arr[i])
        for (let j=0; j<arr[i].length; j++){
          sum=sum+arr[i][j]
        }
      }
    }
  console.log(sum)
  return sum
*/