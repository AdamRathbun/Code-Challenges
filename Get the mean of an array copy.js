function getAverage(marks){
    let sum=0
    console.log(marks.length)
    for (let i=0; i<marks.length; i++){
      sum+=marks[i]
      console.log(sum)
    }
    let avg=sum/marks.length
    console.log(avg)
    console.log (Math.floor(avg))
    return Math.floor(avg)
  }