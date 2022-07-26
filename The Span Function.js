function span(arr, predicate) {
  let i=0
  while (i<arr.length && predicate(arr[i])){
    i++
  }
  return [arr.slice(0,i), arr.slice(i)]
}

/*
P: an array and a function 
R: an array of two arrays, first the part of the original array 
that works with the function, then a second that picks up where it stops working
E: 
function isEven (x) {
  return Math.abs(x) % 2 === 0;
}
var arr = [2,4,6,1,8,10];
span(arr, isEven) === [[2,4,6],[1,8,10]]
P:
while function to find when i stops working
return [arr.slice(0,i), arr.slice(0)] b.c slice end is not inclusive
*/