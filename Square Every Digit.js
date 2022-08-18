function squareDigits(num){
  let number = num.toString().split('')
  let arr=[]
  for (let i=0; i<number.length; i++){
    const digit=Number(number[i])
    arr.push(digit**2)
  }
  return Number(arr.join(''))
}

/*
P: number
R: number with squares of each digit concatenated 
E: 9119 returns 811181
P:
toString, split, new array, square each digit, cocatenate
*/