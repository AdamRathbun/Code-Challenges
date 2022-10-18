function howManySmaller(arr,n){
    let howMany=0
    for (let i=0; i<arr.length; i++){
      arr[i]=arr[i].toFixed(2)
      if (arr[i]<n){
        howMany+=1
      }
    }
    return (arr, howMany)
  }