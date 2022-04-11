function search(budget, prices) {
    let sum=''
    prices=prices.filter(x=>x<=budget).sort((a,b)=>a-b)
    return prices.join(',')
  }
  
  /*
  P: num, array of num
  R: string of nums
  E: function(5,[5,1,3,11]) returns '5,1,3'
  p:
  for loop
  conditional =>concat to string sum
  sort
  return sum.join(',')
  */