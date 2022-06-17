function evenNumbers(array, number) {
  return array.filter(x=>x%2===0).slice(-number)
}

/*
P: array of nums then a number
R: array of even nums to the count of original number
E: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
P: filter then slice (-number)
*/