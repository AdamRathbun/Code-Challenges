function arithmeticSequenceElements(a, d, n) {
  let arr=[]
  arr.push(a)
  for (let i=1; i<n; i++){
    arr.push(a+(i*d))
  }  
  console.log(arr.join(', ').toString())
  return arr.join(', ').toString()
}

/*
P: first number, difference, how many elements
R: a string of all the elements
E: arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
P:
arr. push a to arr
for loop for every element past first element (since first element unchanged)
arr.toString()
*/