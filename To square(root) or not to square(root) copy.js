function squareOrSquareRoot(array) {
  return array.map(x=>Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x**2)
}

/*
P: array of nums
R: array of nums that's either square root or squared of each, depending on if it has a square root
E: function ([4,3,9]) returns [2,9,3]
P: for loop or forEach, Math.sqrt || **, depending on if it can do an integer square root
*/