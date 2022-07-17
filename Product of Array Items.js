/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 return values[~~(Math.random() * values.length)];
 */
function product(values) {
  return values&&values.length?values.reduce((a,b)=>a*b,1):null
}
/*
P: an array which can be empty, or a null value
R: product if it is an array containing numbers
E:[5, 4, 1, 3, 9]), 540
P:
conditional, then either for loop or reduce
*/