function numberJoy(n) {
  let digits=n.toString().split('')
  let sum=0
  for (let i = 0; i<digits.length; i++){
    sum+=Number(digits[i])
  }
  let reversed=Number(sum.toString().split('').reverse().join(''))
  return sum*reversed===n ? true : false
}


/*
find out if a number is a Harshad number, see example:
its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with, therefore true.
*/