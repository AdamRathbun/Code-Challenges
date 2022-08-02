function solve(s){
  return Math.max(...s.match(/\d+/g))
};

/*
find the largest number in a string
'gh12cdy695m1' returns 695
regex string.match(/\d+/g)
*/