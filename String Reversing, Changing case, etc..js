function reverseAndMirror(s1,s2) {
  console.log(s1)
  const string1=s1.split('')
  for (i = 0; i<string1.length; i++){
    if (string1[i]===string1[i].toUpperCase()){
      string1[i]=string1[i].toLowerCase()
    }else {
      string1[i]=string1[i].toUpperCase()
    }
  }
  const fix=string1.join('')
  const string2=s2.split('')
  for (i = 0; i<string2.length; i++){
    if (string2[i]===string2[i].toUpperCase()){
      string2[i]=string2[i].toLowerCase()
    }else {
      string2[i]=string2[i].toUpperCase()
    }
  }
  return string2.reverse().join('')+'@@@'+string1.reverse().join('')+fix
}