function longestWord(stringOfWords){
  const sorted = stringOfWords.split(' ')
  console.log(sorted)
  return sorted.sort((a,b)=> a.length-b.length)[sorted.length-1]
}
