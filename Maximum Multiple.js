function maxMultiple(divisor, bound){
  for (let i=bound; i>0; i--){
    if (i%divisor===0){
      return i
    }
  }
}

/*
P: divisor number, upper bound number
R: biggest number that is divisible by divisor, <= bound, and >0
E: maxMultiple(2,7),6
P:
for loop in reverse, conditions
*/