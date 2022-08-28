function sumFromString(str){
  return (str.match(/\d+/g) || []).map(Number).reduce((a,b)=>a+b, 0)
}

/*
"1+1=2" returns 4
match regex string.match(/\d+/g), or empty string, 
then map and make them all number types, then reduce to add and start at 0
*/