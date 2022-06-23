function maxTriSum(numbers){
  let arr=[...new Set(numbers)];
  arr.sort((a,b)=>b-a);
  return (arr[0]+arr[1]+arr[2]);
}

/*
P: array of nums
R: maximum sum of the highest 3 nums
E: [3,2,6,8,2,3]),17
P: 
make a new set of array
sort highest to lowest
return sum of the first three
*/