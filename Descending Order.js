function descendingOrder(n){
  let number=n.toString().split('').sort((a,b)=>b-a)
  return Number(number.join(''))
}
/*
P: number, positive only
R: number with digits in descending order
E: Input: 145263 Output: 654321
P:
split, sort b-a
*/