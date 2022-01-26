function isNarcissistic(n){
    let arr=String(n).split('')
    let exp=arr.length
    let sum=0
    for (let i=0; i<exp; i++){
      sum+=Math.pow(arr[i],exp)
    }
    if (sum===n){
      return true
    }else {
      return false
    }
  }