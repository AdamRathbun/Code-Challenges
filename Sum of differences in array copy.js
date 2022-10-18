function sumOfDifferences(arr) {
    let brr=arr.sort((a,b)=>b-a)
    console.log(brr)
    let sum=0
    if (brr.length<=1){
      return 0
    }else if (brr.length>=2){
      for (let i=1; i<brr.length; i++){
        sum+=brr[i-1]-brr[i]
        console.log(sum)
      }
    }
    console.log(sum)
    return sum
  }