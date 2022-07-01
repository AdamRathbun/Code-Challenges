function arrayMash (array1, array2) {
  let arr=[]
  for (let i=0; i<array1.length; i++){
    arr.push(array1[i])
    arr.push(array2[i])
  }
  return arr
}


/*
P: two arrays
R: combined array with alternating elements arr1 then arr 2
E: [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
P:
for loop
new array push from one array then the other
*/