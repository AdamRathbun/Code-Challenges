function reverseWords(str) {
  let array = str.split(' ')
  for (let i=0; i<array.length; i++){
    const word = array[i].split('').reverse().join('')
    array[i]=word
  }
  return array.join(' ')
}

/*
reverse each word in a string
split it into an array of words, then for each word, split it into letters to use array method reverse()
then join and join again
*/