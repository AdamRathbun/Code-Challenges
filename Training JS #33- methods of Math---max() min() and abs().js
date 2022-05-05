function maxMin(arr1,arr2){
    let diff=[]
    for (let i=0; i<arr1.length; i++){
      diff.push(Math.abs(arr1[i]-arr2[i]))
    }
    console.log(diff)
    return [(Math.max(...diff)), (Math.min(...diff))]
  }