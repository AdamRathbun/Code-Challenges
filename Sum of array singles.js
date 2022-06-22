function repeats(arr){
  return arr.filter((x,i,array)=>array.indexOf(x)===array.lastIndexOf(x)).reduce((a,b)=>a+b)
};


/*
P: array
R: single number sum of numbers that appear only once in array
E: [4,5,7,5,4,8]),15
P:
filter, indexOf(x)===lastIndexOf(x), reduce
*/