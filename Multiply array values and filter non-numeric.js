function multiplyAndFilter(array, multiplier){
    let arr=[]
    for (let i=0; i<array.length; i++){
      if (typeof array[i]==='number'){
        arr.push(array[i])
      }
    }
    return arr.map(x=>x*multiplier)
  }