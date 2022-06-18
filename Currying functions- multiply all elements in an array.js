function multiplyAll(arr){
  return function (int){
    return arr.map(x=>x*int)
  }
}
/*
P: arr and then a helper function with an integer parameter
R: array multiplied by integer
E: multiplyAll([1, 2, 3])(2) = [2, 4, 6];
P: helper function inside with int parameter
*/