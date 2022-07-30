function getSumOfDigits(integer) {
  var sum = 0;
  let digits=integer.toString().split('')
  for (let i=0; i<digits.length; i++){
    sum+=Number(digits[i])
  }
  return sum;
}

/*
P: take a num
R: sum of each digit of that num
E: 123, 6
P:
turn it to string, then split, then for loop, add each Numberr(digit) to sum, return sum
*/