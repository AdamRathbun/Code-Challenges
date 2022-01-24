function dontGiveMeFive(start, end) {
    console.log(start,end)
    let count=0
    for (let i=start; i<=end; i++){
      if (i>=50 && i<60 || i<=-50 && i>-60){
        continue
      }else if (i%5==0 && i%10!==0){
        continue
      }else {
        count++
      }
    }
    console.log(count)
    return count
  }