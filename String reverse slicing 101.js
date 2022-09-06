function reverseSlice(str) {
  let string = str.split('')
  string.reverse()
  let arr=[string.join('')]
  while (string.length>1){
    string=string.slice(1)
    arr.push(string.join(''))
  }
  return arr
}

/*
return the string in reverse and in slices until length of 1
while loop to slice(1) until length of 1, push to array each time
*/