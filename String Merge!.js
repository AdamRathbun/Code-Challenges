function stringMerge(string1, string2, letter){
  const str1=string1.indexOf(letter)
  const str2=string2.indexOf(letter)
  const str=string1.slice(0,str1)+string2.slice(str2)
  return str
}


/*
P: two strings and a letter that connects the two
R: combined strings
E: ("hello", "world", "l") ==> "held"
P: find index of the letter in each string, then slice and concatenate
*/