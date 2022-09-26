function keysAndValues(data){
  let arr1=[]
  let arr2=[]
  for (let key in data){
    arr1.push(key)
    arr2.push(data[key])
  }
  return [arr1, arr2]
}

/*
separate keys and values into diff arrays
*/