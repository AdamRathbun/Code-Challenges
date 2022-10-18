function countPositivesSumNegatives(input) {
    console.log(input)
    let sum1=0
    let sum2=0
    if (input===null || input.length===0){
      return []
    }
    for (let i=0; i<input.length; i++){
      if (input[i]>0){
        sum1+=1
      }else if (input[i]<0){
        sum2+=input[i]
      }
    }
    console.log(sum1)
    return [sum1,sum2]
}