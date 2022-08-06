function highAndLow(numbers){
  let arr=numbers.split(' ')
  const nArr=arr.map(x=>Number(x))
  nArr.sort((a,b)=>a-b)
  return nArr[nArr.length-1].toString()+' '+nArr[0].toString()
}

/*
P: string of numbers
R: two numbers, the highest then the lowest, also a string
E: highAndLow("1 2 -3 4 5"); // return "5 -3"
P:
split(' ') then map with parseInt or Number
sort()
take last then first
*/