function sumOfIntegersInString(s){
  return (s.match(/\d+/g)|| []).reduce((a,b)=>Number(a)+Number(b),0)
}

/*
pull all integers from string (sometimes empty) and return the sum
*/