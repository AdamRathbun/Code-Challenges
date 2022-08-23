function modifyMultiply (str,loc,num) {
  const word = str.split(' ')[loc]
  if (num===1) return word
  let string=[]
  for (let i=1; i<=num; i++){
    string.push(word)
  }
  return string.join('-')
} 

/*
parameter is a string, the index of the word to be repeated, and number of times
return the repeated word
"This is a string",3 ,5 returns "string-string-string-string-string"

split(' '), then for loop with an array, then join('-')
*/