function solution(str, ending){
  return str.endsWith(ending) ? true : false;
}

/*
P: str and a second str that's the ending of the first string
R: boolean
E: solution('abc', 'bc') // returns true
P:
endsWith()
*/