const sumAverage = (arr) => {
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    let avg=(arr[i].reduce((a,b)=>a+b))/arr[i].length;
    sum+=avg;
  }
  return Math.floor(sum);
}

/*
P: array of arrays of numbers
R: rounded down average of all the arrays
E: [3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44
P:
for loop into geting the avg of each array to add to a sum, then return the rounde down sum
*/