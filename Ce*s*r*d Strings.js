function uncensor(infected, discovered) {
  let letters = discovered.split('')
  let entire = infected.split('')
  console.log(letters, entire)
  for (let i=0; i<entire.length; i++){
    if (infected[i]==='*'){
      entire[i]=letters.shift()
    }
  }
  return entire.join('')
}

/*
string with some censored * letters, then a string of replacement letters
replace * with letters from replacement string
*/