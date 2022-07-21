function sortMyString(S) {
  const splitted=S.split('')
  let odds=[]
  let evens=[]
  for (let i=0; i<splitted.length; i++){
    if ((i%2)===0){
      evens.push(splitted[i])
    }else {
      odds.push(splitted[i])
    }
  }
  console.log(evens)
  evens=evens.join('')
  odds=odds.join('')
  return `${evens} ${odds}`
}


/*
P: string
R: re-arranged string with all even index characters in the first string word and odds in the second
E: input: 'CodeWars' output 'CdWr oeas'
P:
split('')
for loop, log evens into one array and odds into another, then join('') for each
return two arrays added together with a space in between
*/