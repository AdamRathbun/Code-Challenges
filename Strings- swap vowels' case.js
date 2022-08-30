function swapVowelCase(str) {
  let letters = str.split('')
  console.log(letters)
  for (let i=0; i<letters.length; i++){
    if(letters[i].match(/[aeiou]/g)){
      letters[i]=letters[i].toUpperCase()
    }else if(letters[i].match(/[AEIOU]/g)){
      letters[i]=letters[i].toLowerCase()
    }
  }
  return letters.join('')
}