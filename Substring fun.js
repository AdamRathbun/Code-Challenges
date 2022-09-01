function nthChar(words){
  let str = ''
 for (let i=0; i<words.length; i++){
   str=str+words[i][i]
 }
  return str
}
 

/*
concatenate a character from each word of an array matching the index of that word
within the array
ex. ["yoda", "best", "has"]  -->  "yes"
for loop
*/