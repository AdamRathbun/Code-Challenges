function transposeTwoStrings (array) {
  let tester=Math.max(array[0].length, array[1].length)
  let word=[]
  
  for (let i=0; i<tester; i++){
    let addition=(array[0][i] || ' ') + ' ' + (array[1][i] || ' ')
    word.push(addition)
  } 
  
  console.log(word)
  return word.join('\n')
}

/*
p: two strings
r: one string transposed (vertical)
e: 
transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
p:
math max for which word is longer
for loop and concatenate either the element or blank space of each one
join with \n
*/
