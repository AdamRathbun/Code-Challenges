function removeNthElement(arr, n) {
  let arrCopy = new Array(...arr);
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}

/*
P array and n for index of element to be removed
R array with n element removed
E: function([2,3,1,3],2) returns [2,3,3]
P
the problem is that this function is mutating the original arr
use array constructor and spread operator to create an exact replica, then splice
*/