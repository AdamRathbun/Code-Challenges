function leastLarger(a,i) {
  const num = a[i]
  const arr = a.slice().sort((x,y)=>x-y)
  for (let j=0; j<arr.length; j++){
    if (arr[j]>num){
      const number = a.indexOf(arr[j])
      return number
    }
  }
  return -1
}

/*
P: array and an index
R: return the index of smallest number that is larger than the num at index, else -1
E: [4, 1, 3, 5, 6], 0   =>  3
P:
sort, for loop, if
*/