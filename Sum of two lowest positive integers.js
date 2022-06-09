function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b)=>a-b)
  return (numbers[0]+numbers[1])
}

/*
P: array of nums (at least 4)
R: sum of 2 lowest nums
E: function([5,2,6,7 ,23]) returns 7
P:
sort, add first two elements
*/