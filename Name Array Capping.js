function capMe(names) {
  const lowered = names.map(x=> x.toLowerCase())
  const turned = lowered.map(x=>x[0].toUpperCase()+x.slice(1))
  return turned
}

/*
take an array of strings, make the first letter capped
turn each string to lower case, then map first letter to uppercase plus slice from index 1
*/