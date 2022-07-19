function isPrime(n) {
  if (n===0 || n===1){
    return false
  }
  const squared=Math.sqrt(n)
  for (let i=2; i<=squared; i++){
    if (n%i===0){
      return false
    }
  }
  return true
}

/*
P: num to check if prime (greater than 1 and only divisible by itself)
R: boolean
E: 
11 --> true
12 --> false
P: 
for loop that goes up to a square root of itself, starting at 2
conditional: n%i===0 return true
*/