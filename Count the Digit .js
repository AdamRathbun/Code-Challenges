function nbDig(n, d) {
  let count = 0
  for (let i=0; i<=n; i++){
    const number = String(i*i)
    number.split('').forEach(x=> x===String(d) ? count+=1 : x)
  }
  return count 
}

/*
given integer n and digit d, find out how many times you get a number with d in it if you
square every number from 0 to n
return the number of times
*/