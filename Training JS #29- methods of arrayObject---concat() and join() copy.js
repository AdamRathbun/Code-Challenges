function bigToSmall(arr){
    let newArr=[]
    for (let i=0; i<arr.length; i++){
      newArr=newArr.concat(arr[i])
    }
    newArr.sort((a,b)=>b-a)
    return newArr.join('>')
  }