function toAcronym(inp){
  const string=inp.split(' ')
  let acr=''
  for (let i=0; i<string.length; i++){
    acr+=string[i][0]
  }
  return acr.toUpperCase()
}

/*
P: string
R: acronym out of the string (capitalized first letters joined together)
E:  ["Code Wars", "CW"]
P: split(' '), toUpperCase(), for loop join first letter
*/