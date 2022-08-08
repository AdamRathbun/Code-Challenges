function findShort(s){
  let arr=s.split(' ')
  arr.sort((a,b)=>a.length-b.length)
  return arr[0].length
}

/*

P: string of words
R: length of shortest word
E: findShort("turns out random test cases are easier than writing out basic ones"), 3
P: split(' ') sort by length

*/