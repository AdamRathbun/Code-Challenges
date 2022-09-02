function getCount(str) {
  let count = 0
  for (let letter of str){
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      count++
    }
  }
  return count
}

/*
if a letter equals a vowel, increase the count
*/