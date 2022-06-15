function productArray(numbers){
  let arr=[]
  for (let i=0; i<numbers.length; i++){
    let prod=1
    for (let j=0; j<numbers.length; j++){
      prod*=numbers[j]
    }
    arr.push(prod/(numbers[i]))
  }
  return arr
}


/*
P: array of nums -- only positive nums and array of at least 2 elements
R: array of nums such that each index's element is the produce of all other elements
E: [3,27,4,2]), [216,24,162,324]
P: just divide by the current index for each one
*/